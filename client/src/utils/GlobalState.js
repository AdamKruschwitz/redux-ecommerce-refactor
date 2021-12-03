import React from "react";
import reducer from './reducers'

import { Provider } from 'react-redux'
import { createStore } from 'redux'


const StoreProvider = ({ value = [], ...props }) => {
  const store = createStore(reducer);
  return <Provider store={store} {...props} />;
};

const selectCart = state => state.cart;
const selectCategories = state => state.categories;
const selectCurrentCategory = state => state.currentCategory;
const selectProducts = state => state.products;
const selectCartOpen = state => state.cartOpen;

export { StoreProvider, selectCart, selectCategories, selectProducts, selectCurrentCategory, selectCartOpen };
