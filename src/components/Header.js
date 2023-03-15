import React,{useContext} from "react";
import { UseContext } from "../App";
import { Outlet, Link } from "react-router-dom";
let Header = () =>{
    const {count}=useContext(UseContext);
    return(
        <header class="header-content">
            <div class="header-name">
                <h1>SHOPPING CART</h1>
            </div>
            <div class="header-items">
                <Link to="/cart"><img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"/></Link>
                <a href="#">Sign In</a>
                <h3 class="cart">{count}</h3>
            </div>
            <Outlet />
        </header>
    )
}
export default Header