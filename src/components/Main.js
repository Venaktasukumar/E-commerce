import React,{useContext } from 'react';
import { UseContext } from '../App';

let Main = () => {
    const { arrayLength, setarrayLength, count, setCount,mainItems,} = useContext(UseContext);
    
    let update = (obj) => {
        if (arrayLength.some(item => item.id === obj.id)) { 
            setarrayLength(arrayLength.filter(item => item.id !== obj.id));
            setCount(count - 1); 
        } else {
            setarrayLength([...arrayLength, obj]);
            setCount(count + 1); 
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
