import React, { useEffect, useState } from "react";
import "./searchField.css";
import { useDispatch, useSelector } from "react-redux";
import { productList, searhItem } from "../../slices/Search";

function SearchField() {
  //   const [productItems, setProductItems] = useState([]);
  const [filterItems, setFilterItems] = useState("");
  const [timer, setTimer] = useState(null);
  const filteredProduct = useSelector((state) => state.search.filteredProducts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFilterItems(e.target.value);
  };

  useEffect(() => {
    const fetchDate = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      //   setProductItems(data);
      dispatch(productList(data));
    };
    fetchDate();
  }, [dispatch]);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(() => dispatch(searhItem(filterItems)), 500);

    setTimer(newTimer);

    return () => clearTimeout(newTimer);
  }, [filterItems]);

  return (
    <div className="container">
      <div>
        <input
          type="text"
          value={filterItems}
          placeholder="Search Product"
          onChange={handleChange}
        />
      </div>
      <div className="card-container">
        {filteredProduct &&
          filteredProduct.map((item) => (
            <div className="card-wrapper" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                width="100%"
                height="200px"
              />
              <div className="card-title">
                <h5>{item.title}</h5>
              </div>
              <div className="card-price">
                <p className="card-price">${item.price}</p>
              </div>
              <button className="btn-add-to-cart">Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchField;
