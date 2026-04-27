const productsSource = {
  // Keep endpoint and timeout centralized for consistent data access.
  endpoint: `${process.env.PUBLIC_URL}/data/products.json`,
  timeoutMs: 10000,
};

export default productsSource;
