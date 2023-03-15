import React from 'react';
import { useState, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { UseContext } from '../App';
let Aside = () =>{
    const { products,setmainItems} = useContext(UseContext);
    let filteritems=(value)=>{
        const AppleItems=products.filter((items)=> items.name===value);
        console.log(AppleItems);
        setmainItems(AppleItems);
    }
    return(
        <div class="item1">
                <h3>Brands</h3>
                <button onClick={()=>{filteritems('iphone')}}>Apple</button>
                <button onClick={()=>{filteritems('realme')}}>Realme</button>
                <button onClick={()=>{filteritems('vivo')}}>Vivo</button>
                <button onClick={()=>{filteritems('MI')}}>MI</button>
                <Outlet />
            </div>
    )
}

export default Aside