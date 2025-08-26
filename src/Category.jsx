import React from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { sortProducts } from "./productSlice";

const Category = () => {
    const dispatch = useDispatch();
    const { sortedProducts } = useSelector((state) => state.products);

    const selectIteam = (e) => {
        dispatch(sortProducts(e.target.value));
    };

    return (
        <div className="app-wrapper">
            <Navbar />
            <div className="category">
                <label htmlFor="select">Category :</label>
                <select id="select" className="select-box" onChange={selectIteam}>
                    <option value="Product A to Z">Product A to Z</option>
                    <option value="Product Z to A">Product Z to A</option>
                    <option value="Price High to Low">Price High to Low</option>
                    <option value="Price Low to Hight">Price Low to High</option>
                </select>
            </div>

            <div className="products">
                {sortedProducts.map((cur, index) => {
                    return (
                        <div className="card" key={index}>
                            <img src={cur.img} alt={cur.name} />
                            <div className="text">
                                <p className="name">Model : {cur.name}</p>
                                <p className="price">Price : {cur.price}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Category;
