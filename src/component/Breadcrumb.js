import React from "react";
import '../App.css';
import {Link} from 'react-router-dom';

const Breadcrumb = (props) => {
    return(
        <div className="mx-3 p-5 pt-lg-3 bg-transparant">
            <div><Link to="/">HOME</Link>&nbsp;&nbsp;&nbsp;<i class="far fa-angle-right"></i>&nbsp;&nbsp;PRODUCT PAGE</div>
        </div>
    );
}

export default Breadcrumb;
