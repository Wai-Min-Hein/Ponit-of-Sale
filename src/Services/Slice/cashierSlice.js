import { createSlice } from "@reduxjs/toolkit";

const LocalProducts = JSON.parse(localStorage.getItem("products")) || [];
const initialState = {
  products: LocalProducts,
};

const cashierSlice = createSlice({
  name: "cashier",
  initialState,
  reducers: {
    addToReceive: (state, actions) => {
      const product = actions.payload;

      const isExisted = state.products?.find((item) => item?.id == product.id);
      if (!isExisted) {
        state.products.push(product);
        localStorage.setItem("products", JSON.stringify(state.products));
      } else {
        isExisted.quantity += 1;
        localStorage.setItem("products", JSON.stringify(state.products));
      }
    },
    changeQtyByNum: (state, actions) => {
      const product = actions.payload;

     

      const currentIndex = (element) => element.id == product.id

      const index = state.products.findIndex(currentIndex)

      state.products[index] = product

      localStorage.setItem("products", JSON.stringify(state.products));
    },

    eraseQty: (state, actions) => {
      const product = actions.payload;
      const currentIndex = (element) => element.id == product.id

      const index = state.products.findIndex(currentIndex)

      state.products[index] = product

    

      localStorage.setItem("products", JSON.stringify(state.products));
    },

    removePdByQty : (state, actions)=> {
      const product = actions.payload;
      state.products = state.products.filter(item => item.id != product.id)
      localStorage.setItem("products", JSON.stringify(state.products));

    }
  },
});

export const { addToReceive, changeQtyByNum,eraseQty,removePdByQty } = cashierSlice.actions;
export default cashierSlice.reducer;
