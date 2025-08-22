import React, { useState } from 'react'
import Navbar from './Navbar'
import { AllData } from './Data'

const Category = () => {
    const [data, setData] = useState(AllData);
    const [inputVal, setInputVal] = useState("");

    const selectIteam = (e) => {
        console.log(e.target.value);
        setInputVal(e.target.value);
    }
    if (inputVal === "Product A to Z") {
        data.sort((a, b) => {
            let nameA = a.name;
            let nameB = b.name;

            if (nameA < nameB) {
                return -1;
            }

        })
    }
      if (inputVal === "Product Z to A") {
        data.sort((a, b) => {
            let nameA = a.name;
            let nameB = b.name;

            if (nameA < nameB) {
                return -1;
            }

        })
    }

    return (
        <div className='app-wrapper'>
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
                {
                    data.map((cur) => {
                        return (
                            <div className="card">
                                <img src={cur.img} alt={cur.name} />
                                <div className="text">
                                    <p className="name">Model : {cur.name}</p>
                                    <p className="price">Price : {cur.price}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

        </div>

    )
}

export default Category