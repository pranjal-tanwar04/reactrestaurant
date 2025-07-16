import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //redux toolkit uses inner BTS
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
    //originalState =["pizza"]
    clearCart: (state, action) => {
      // console.log(state); //pizza
      // console.log(current(state));
      // state = [];
      // console.log(state); //pizza
      

      //RTK- EITHER MUTATE THE EXISTING STATE OR RETURN A NEW STATE
      // state.items.length = 0; //state =[]
      return{items: []};// this new[] will be replaced inside originalstate =[]
    },
  },
});

export const { addItem, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
