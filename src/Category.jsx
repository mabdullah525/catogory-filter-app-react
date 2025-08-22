import React, { useState } from 'react'
import Navbar from './Navbar'
import { AllData } from './Data'

const Category = () => {
    const [data, setData] = useState(AllData);
    return (
        <div className='app-wrapper'>
            <Navbar />
            <div className='category'>
                <label>Category : </label>
                <select>
                    <option value="Product A to Z">Product A to Z</option>
                    <option value="Product Z to A">Product Z to A</option>
                    <option value="Price High to Low">Product A to Z</option>
                    <option value="Price Low to Hight">Product A to Z</option>
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