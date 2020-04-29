import React from "react";
import '../App.css';
import {Link} from 'react-router-dom';

const Breadcrumb = (props) => {
    return(
        <nav aria-label="breadcrumb bg-transparant">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">{props.productName}</li>
            </ol>
        </nav>
    );
}

export default Breadcrumb;
