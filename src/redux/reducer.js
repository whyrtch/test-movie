const appState = {
    products : {
        data : [],
        loading: false
    },
    selectedProduct : {
        data: {},
        loading: false
    }
}

const app = (state = {...appState}, action) => {
    console.log('action : ', action.type)
    switch (action.type) {
        case 'GET_PRODUCTS' :
            return {
                ...state,
                products: {
                    ...state.products,
                    loading: true
                }
            };
        case 'GET_PRODUCT_SUCCESS' :
            return {
                ...state,
                products: {
                    data: action.payload,
                    loading : false
                }
            };
        case 'GET_PRODUCT_FAILED':
            return {
                ...state,
                products: {
                    ...state.products,
                    loading: true
                }
            };
            case 'GET_SELECTED_PRODUCT' :
                return {
                    ...state,
                    selectedProduct: {
                        data: action.payload,
                        loading : false
                    }
                }
        
        default:
            return state
    }
};


export default app