import React, {Fragment} from 'react';
import Card from '../atom/Card';

const ListProduct = (props) => {
    return (
        <Fragment>
        <div className="row no-gutters">
            {
                props.loading ?
                "loading ... " :
                props.data.map(product => {
                    return (
                        <Card link="/product" product={product} key={product.imdbID} title={product.Type} cardClass="col-lg-6" imgClass={"h-37"} img={product.Poster} handleClick={props.handleClick}/>
                    )
                })
            }
        </div>
        </Fragment>
    )
}

export default ListProduct;