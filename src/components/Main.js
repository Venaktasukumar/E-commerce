import React from 'react';
import { useState, useContext } from 'react';
import { UseContext } from '../App';

let Main = (props) => {
    const { products, arrayLength, setarrayLength, count, setCount,mainItems,setmainItems} = useContext(UseContext);
    
    let update = (obj) => {
        if (arrayLength.some(item => item.id === obj.id)) { // check if product already in cart
            setarrayLength(arrayLength.filter(item => item.id !== obj.id)); // remove product from cart
            setCount(count - 1); // decrement count
        } else {
            setarrayLength([...arrayLength, obj]); // add product to cart
            setCount(count + 1); // increment count
        }
    }

    return (
        <div className="item2">
            <h2>Products</h2>
            <div className="images">
                {mainItems.map((product) => (
                    <div key={product.id}>
                        <img src={product.image} alt="" />
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                        <button onClick={() => update(product)}>
                            {arrayLength.some(item => item.id === product.id) ? 'Remove from Cart' : 'Add to Cart'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Main;