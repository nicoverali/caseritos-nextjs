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
  async getAll(page: number, size: number): Promise<Product[]> {
    const offset = page * size;
    const products = await fetch(
      apiUrl(`products?offset=${offset}&limit=${size}`)
    ).then((res) => res.json() as Promise<Product[]>);

    products.forEach((p) => {
      p.pictureUrl = apiUrl(`products/${p.id}/picture`);
      p.thumbnailUrl = apiUrl(`products/${p.id}/thumbnail`);
    });

    return products;
  }

  async get(id: number): Promise<Product> {
    const product = await fetch(apiUrl(`products/${id}`)).then(
      (res) => res.json() as Promise<Product>
    );

    product.pictureUrl = apiUrl(`products/${product.id}/picture`);
    product.thumbnailUrl = apiUrl(`products/${product.id}/thumbnail`);

    return product;
  }
}

export default new ProductService();
