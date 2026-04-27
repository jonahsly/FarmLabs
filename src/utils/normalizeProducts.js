const toSafeNumber = (value, fallback = 0) => {
  const parsedValue = Number(value);
  return Number.isFinite(parsedValue) ? parsedValue : fallback;
};

const toSafeString = (value, fallback) => {
  if (typeof value !== "string") return fallback;
  const trimmedValue = value.trim();
  return trimmedValue.length > 0 ? trimmedValue : fallback;
};

const toSafeImages = (value) => {
  if (!Array.isArray(value)) return [];
  return value.filter((image) => typeof image === "string" && image.trim().length > 0);
};

// Keep product shape consistent so UI components can stay simple.
export const normalizeProduct = (product, index) => {
  const safeProduct = product || {};
  return {
    ...safeProduct,
    id: safeProduct.id ?? `product-${index ?? 0}`,
    title: toSafeString(safeProduct.title, "Untitled product"),
    description: toSafeString(safeProduct.description, "No description available."),
    price: toSafeNumber(safeProduct.price),
    images: toSafeImages(safeProduct.images),
    quantity: toSafeNumber(safeProduct.quantity, 1),
  };
};

export const normalizeProducts = (products) => {
  if (!Array.isArray(products)) return [];
  return products.map((product, index) => normalizeProduct(product, index));
};
