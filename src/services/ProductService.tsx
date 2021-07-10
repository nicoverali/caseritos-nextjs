import { NotFoundError, UnexpectedRequestError } from "./apiErrors";
import apiUrl from "./apiUrl";

export interface Product {
  id: number;
  name: string;
  pictureUrl: string;
  thumbnailUrl: string;
  description: string;
  price: number;
  stock: number;
  owner: {
    id: number;
    storeName: string;
  };
  createdAt: Date;
}

class ProductService {
  async getAll(signal?: AbortSignal): Promise<Product[]> {
    const res = await fetch(apiUrl(`products`), { signal });

    if (res.status != 200) throw new UnexpectedRequestError(res);

    const products = await (res.json() as Promise<Product[]>);

    products.forEach((p) => {
      p.pictureUrl = apiUrl(`products/${p.id}/picture`);
      p.thumbnailUrl = apiUrl(`products/${p.id}/thumbnail`);
    });

    return products;
  }

  async get(id: number, signal?: AbortSignal): Promise<Product> {
    const res = await fetch(apiUrl(`products/${id}`), { signal });

    if (res.status == 404) throw new NotFoundError();
    if (res.status != 200) throw new UnexpectedRequestError(res);

    const product = await (res.json() as Promise<Product>);

    product.pictureUrl = apiUrl(`products/${product.id}/picture`);
    product.thumbnailUrl = apiUrl(`products/${product.id}/thumbnail`);

    return product;
  }

  async getPage(
    page: number,
    size: number,
    signal?: AbortSignal
  ): Promise<Product[]> {
    const offset = page * size;
    const res = await fetch(apiUrl(`products?offset=${offset}&limit=${size}`), {
      signal,
    });

    if (res.status != 200) throw new UnexpectedRequestError(res);

    const products = await (res.json() as Promise<Product[]>);

    products.forEach((p) => {
      p.pictureUrl = apiUrl(`products/${p.id}/picture`);
      p.thumbnailUrl = apiUrl(`products/${p.id}/thumbnail`);
    });

    return products;
  }
}

export default new ProductService();
