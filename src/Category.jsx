import React, { useState } from 'react'
import Navbar from './Navbar'
import { AllData } from './Data'

const Category = () => {
    const [data, setData] = useState(AllData);
    return (
        <div className='app-wrapper'>
            <Navbar />
            <div className='products'>
                {
                    data.map((cur) => {
                        return (
                            <div className="card">
                                <img src={cur.img} />
                            </div>
                        );
                    })
                }

            </div>
        </div>

    )
}

export default Category