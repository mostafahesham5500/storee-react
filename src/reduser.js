import statee from "./state";
const reducer = (state=statee,action) => {
    switch(action.type){
        case "Add_PRODUCT1":
            var total = +(state.totalprice) + +(action.item.price2);
            if(!state.product.includes(action.item)){
                return {product:[...state.product, action.item],totalprice:total};
            }else{
                state.product.filter(it => {
                    if(action.item.id == it.id){
                        return it.quantity = action.item.quantity + 1;
                    }
                })
                return {product:[...state.product],totalprice:total};
            }
        case "REMOVE":
            state.product = state.product.filter(item => {
                if(item.id === action.id && state.totalprice > 0){
                    total = state.totalprice - +(item.price2 * item.quantity)
                }
                return item.id !== action.id && state.totalprice;
            });
            state.ren = !state.ren;
            return {product:[...state.product],totalprice:total};
        case "INCREASE":
            state.product = state.product.filter(item => {
                if(item.id === action.id){
                    item.quantity = item.quantity + 1;
                    total = state.totalprice + +(item.price2);
                }
                return  item.id !== 0;
            });
            return {product:[...state.product],totalprice:total};
            break
        case "DECREASE":
            state.product = state.product.filter(item => {
                if(item.id === action.id && item.quantity > 1){
                    item.quantity = item.quantity - 1;
                    state.totalprice = state.totalprice - +(item.price2);
                }
                return  item.id !== 0;
            });
            return {product:[...state.product],totalprice:state.totalprice};
            break
        default:
            return state;
    }
}

export default reducer;