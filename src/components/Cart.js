import React, { useContext }from "react";
import { UseContext } from '../App';

let Cart = () =>{
    const {arrayLength,setCount,setarrayLength,count} = useContext(UseContext);
    let Change = (obj) =>{
        if (arrayLength.some(item => item.id === obj.id)) {
            setarrayLength(arrayLength.filter(item => item.id !== obj.id)); 
            setCount(count - 1); 
        }
    }
    return(
            <div class="filter-images">
                {arrayLength.map((product) => (
                    <div key={product.id} class ="images">
                        <img src={product.image} alt="" />
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                        <button onClick={()=>{Change(product)}}>Remove the Cart</button>
                    </div>
                ))}
            </div>
    )
}
export default Cart
