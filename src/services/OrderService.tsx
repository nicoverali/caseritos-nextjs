import apiUrl from "./apiUrl";

export interface Order {
  id: number;
  product: {
    id: number;
    name: string;
    pictureUrl: string;
    thumbnailUrl: string;
    owner: {
      id: number;
      storeName: string;
    };
  };
  quantity: number;
  price: number;
  createdAt: Date;
}

class OutOfStockError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "OutOfStockError";
  }
}

class UnauthorizedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UnauthorizedError";
  }
}

class OrderService {
  async getAll(
    page: number,
    size: number,
    accessToken: string,
    signal?: AbortSignal
  ): Promise<Order[]> {
    const offset = page * size;
    const res = await fetch(apiUrl(`orders?offset=${offset}&limit=${size}`), {
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
      signal,
    });

    if (res.status == 401)
      throw new UnauthorizedError("Client credentials are invalid");
    if (res.status != 200)
      throw new Error(
        `Request failed with status: ${res.status} (${res.statusText})`
      );

    const orders = await (res.json() as Promise<Order[]>);
    orders.forEach((o) => {
      o.product.pictureUrl = apiUrl(`products/${o.product.id}/picture`);
      o.product.thumbnailUrl = apiUrl(`products/${o.product.id}/thumbnail`);
    });

    return orders;
  }

  async place(
    productId: number,
    quantity: number,
    accessToken: string,
    signal?: AbortSignal
  ): Promise<void> {
    const res = await fetch(apiUrl(`orders`), {
      method: "POST",
      body: JSON.stringify({ productId, quantity }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      }),
      signal,
    });

    if (res.status == 409)
      throw new OutOfStockError("The given product is out of stock");
    if (res.status == 401)
      throw new UnauthorizedError("Client credentials are invalid");
    if (res.status != 201)
      throw new Error(
        `Request failed with status: ${res.status} (${res.statusText})`
      );
    return;
  }
}

export default new OrderService();
