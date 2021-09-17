import axios from "axios";

export const PRODUCTS_URL = "api/products";

// CREATE =>  POST: add a new product to the server
export function createProduct(product) {
  console.log("createProduct", product, PRODUCTS_URL);
  return axios.post(PRODUCTS_URL, { product });
}

// READ
export function getAllProducts() {
  console.log("PRODUCTS_URL", PRODUCTS_URL);
  return axios.get(PRODUCTS_URL);
}

export function getProductById(productId) {
  console.log("getProductById", productId);
  return axios.get(`${PRODUCTS_URL}/${productId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findProducts(queryParams) {
  console.log("findProducts", queryParams);
  return axios.post(`${PRODUCTS_URL}/find`, { queryParams });
}

// UPDATE => PUT: update the procuct on the server
export function updateProduct(product) {
  console.log("updateProduct", product);
  return axios.put(`${PRODUCTS_URL}/${product.id}`, { product });
}

// UPDATE Status
export function updateStatusForProducts(ids, status) {
  console.log("updateStatusForProducts", ids, status);
  return axios.post(`${PRODUCTS_URL}/updateStatusForProducts`, {
    ids,
    status
  });
}

// DELETE => delete the product from the server
export function deleteProduct(productId) {
  console.log("deleteProduct", productId);
  return axios.delete(`${PRODUCTS_URL}/${productId}`);
}

// DELETE Products by ids
export function deleteProducts(ids) {
  return axios.post(`${PRODUCTS_URL}/deleteProducts`, { ids });
}
