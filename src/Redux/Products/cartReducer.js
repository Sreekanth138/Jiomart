import { REMOVE_FROM_CART, UPDATE_CART } from './action_types';
import { omit,uniq } from 'lodash';

const initialState = JSON.parse(localStorage.getItem("cart")) || {
  cartItems: {},
  additionHistory: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART:
      let data = {
        cartItems: {
          ...state.cartItems,
          [action.payload.product.id]: action.payload,
        },
        additionHistory: uniq([...state.additionHistory, action.payload.product.id]),
      };
      localStorage.setItem('cart', JSON.stringify(data));
      return data;
    case REMOVE_FROM_CART:
      let data2 = {
        cartItems: omit(state.cartItems, [action.payload]),
        additionHistory: state.additionHistory.filter(
          (pId) => pId !== action.payload
        ),
      };
      localStorage.setItem('cart', JSON.stringify(data2));
      return data2;
    default:
      return state;
  }
};
// import { REMOVE_FROM_CART, UPDATE_CART } from './action_types';
// import {omit} from "lodash"

// const initialState={
//     cartItems:JSON.parse(localStorage.getItem("cart")) || {},
//     additionHistory:[]
// }

// export const cartReducer = (state = JSON.parse(localStorage.getItem("cart")) || {}, action) => {
//   switch (action.type) {
//     case UPDATE_CART:
//         let data={...state, [action.payload.product.id]:action.payload}
//         localStorage.setItem("cart",JSON.stringify(data))
//       return (data)
//     case REMOVE_FROM_CART:
//       return omit(state,[action.payload])
//     default:
//       return state;
//   }
// };
