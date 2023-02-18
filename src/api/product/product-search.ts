import { Product } from "src/model";
import { generateQuery } from "../generate-query";

export interface ProductSearchParams {
  query?: string;
}

export interface ProductSearchResult {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const productSearch = generateQuery<ProductSearchParams, ProductSearchResult>({
  name: 'productSearch',
  api: ({ query }) => ({
    url: query ? `https://dummyjson.com/products/search` : `https://dummyjson.com/products`,
    method: 'GET',
    params: { q: query },
  }),
})
