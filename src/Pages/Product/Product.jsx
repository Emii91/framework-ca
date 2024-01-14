import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Item from "../../Components/Item/Item";
import { useCart } from "../Cart/CartContext";
import "./Product.css";

const Product = () => {
  const { productId } = useParams();
  const { dispatch } = useCart();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.noroff.dev/api/v1/online-shop"
        );
        const data = await response.json();
        setProducts(data);

        if (productId) {
          const selected = data.find((product) => product.id === productId);

          if (!selectedProduct || selectedProduct.id !== selected.id) {
            setSelectedProduct(selected);
          }
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [productId]);

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    console.log("Product added to cart:", product);
  };

  return (
    <div>
      {productId && selectedProduct ? (
        <div>
          <Link className="breadcrumb" to="/product">
            Back to products
          </Link>
          <div className="detail-page">
            <h1>{selectedProduct.title}</h1>
            <div className="detail-card">
              <img
                className="detail-img"
                src={selectedProduct.imageUrl}
                alt={selectedProduct.name}
              />
              <div className="detail-text">
                <p>{selectedProduct.description}</p>
                <p>
                  {selectedProduct.discountedPrice !== selectedProduct.price ? (
                    <span>
                      <strong>Discounted Price:</strong> $
                      {selectedProduct.discountedPrice}
                      <br />
                      <strong>Original Price:</strong>{" "}
                      <del>${selectedProduct.price}</del>
                      <br />
                      <strong>Discount:</strong>{" "}
                      {((selectedProduct.price -
                        selectedProduct.discountedPrice) /
                        selectedProduct.price) *
                        100}
                      %
                    </span>
                  ) : (
                    <span>
                      <strong>Price:</strong> ${selectedProduct.price}
                    </span>
                  )}
                </p>
                <button
                  className="to-cart"
                  onClick={() => handleAddToCart(selectedProduct)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            {selectedProduct.reviews && selectedProduct.reviews.length > 0 && (
              <div className="reviews">
                <h2>Reviews</h2>
                <ul>
                  {selectedProduct.reviews.map((review) => (
                    <li key={review.id}>
                      <strong>Username:</strong> {review.username}
                      <br />
                      <strong>Rating:</strong> {review.rating}
                      <br />
                      <strong>Description:</strong> {review.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          {products.map((product) => (
            <Item key={product.id} item={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
