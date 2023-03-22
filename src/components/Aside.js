import React,{ useContext } from 'react';
import { UseContext } from '../App';
let Aside = () =>{
    const { products,setmainItems} = useContext(UseContext);
    let filteritems=(value)=>{
        if(value=="All"){
            setmainItems(products);
        }
        else{
            const Items=products.filter((items)=> items.name===value);
            setmainItems(Items);
        }
    }
    return(
        <div class="item-one">
                <h3>Brands</h3>
                <button onClick={()=>{filteritems('iphone')}}>Apple</button>
                <button onClick={()=>{filteritems('realme')}}>Realme</button>
                <button onClick={()=>{filteritems('vivo')}}>Vivo</button>
                <button onClick={()=>{filteritems('MI')}}>MI</button>
                <button onClick={()=>{filteritems('All')}}>ALL</button>
            </div>
    )
}

export default Aside
