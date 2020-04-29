import React, { Component, Fragment } from 'react';
import Breadcrumb from '../component/Breadcrumb';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        
        if(this.props.product.Title === undefined){
            return <Redirect to="/"/>
        }

        return ( 
        <Fragment>
            <Breadcrumb productName="contoh"/>
            <div className="container-fluid">
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <div className="px-5">
                            <img className="img-fluid w-100 border-radius-18" src={this.props.product.Poster} alt={this.props.product.imdbID}/>
                        </div>
                    </div>
                    <div className="col-lg-6 p-5 p-lg-0">
                        <h5 className="mb-3">1 IN STOCK</h5>
                        <span>{this.props.product.imdbID}</span>
                        <h1 className="py-4">{this.props.product.Title}</h1>
                        <h3 className="py-4">$555555</h3>
                        
                        <h4 className="pt-2 pb-4">
                            Parameter &nbsp; <i class="far fa-angle-down"></i>
                        </h4>

                        <div>
                            <h4>Description</h4>
                        </div>

                        <div className="py-3">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

         );
    }
}


const mapStateToProps = (state) => ({
    loading : state.products.loading,
    product : state.selectedProduct.data
});

export default connect(mapStateToProps)(Product);