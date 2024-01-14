import React, { useState, useEffect } from "react";
import Item from "../Components/Item/Item";
import Banner from "../Components/Banner/Banner";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          "https://api.noroff.dev/api/v1/online-shop"
        );
        const data = await response.json();
        console.log("Fetched items:", data);
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  const handleSearch = () => {
    if (searchTerm.length >= 2) {
      const results = items.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);

      setError(results.length === 0 ? "No results found." : "");
    } else {
      setSearchResults([]);
      setError("");
    }
  };

  const handleItemClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <div>
      <Banner />
      <h1>Latest arrivals</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="container">
        {error && <p style={{ color: "red" }}>{error}</p>}
        {searchResults.length > 0 ? (
          <div>
            <h2>Search Results</h2>
            {searchResults.map((item) => (
              <Item
                key={item.id}
                item={item}
                onClick={() => handleItemClick(item.id)}
              />
            ))}
          </div>
        ) : (
          items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onClick={() => handleItemClick(item.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Shop;
