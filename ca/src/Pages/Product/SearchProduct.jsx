const searchProducts = (products, searchTerm) => {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      (product.description &&
        product.description.toLowerCase().includes(lowerCaseSearchTerm))
  );
};

export default searchProducts;
