import React from 'react';
import {Link} from 'react-router-dom';

const Card = (props) => {

    return(
        <div key={props.key} className={"card p-3 border-none " + props.cardClass} id={props.title} onClick={()=>props.handleClick(props.product)}>
            <Link className="card-body p-0" to={props.link}>
                <img className={"img-fluid w-100 border-radius-18 " + props.imgClass} 
                src={props.img} alt={props.title}/>
                {
                    props.banner ?
                        <div className="text-block border-radius-18">
                           <h1>{props.title}</h1>
                           <h2>{props.subTitle}</h2>
                        </div>
                        :
                        
                        <div className="card-img-overlay flex-bottom px-3 ">
                            <div className="w-100 bg-black-05 mx-3 px-2 row no-gutters border-radius-18">
                                <div className="my-2 col-6 h4 text-white d-flex align-items-center">{props.title}</div>
                                <div className="my-2 col-6 d-flex justify-content-end">
                                    <button className="rounded-circle">></button>
                                </div>
                            </div> 
                        </div>
                }
                
            </Link>
        </div>
    )
}

export default Card;