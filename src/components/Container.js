import React from 'react';
import Aside from './Aside';
import Main from './Main';
let Container = () => {
    return(
        <div class="main-content">
            <Aside />
            <Main/>
        </div>
    )
}
export default Container
