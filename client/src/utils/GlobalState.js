import React from "react";
import reducer from './reducers'

import { Provider } from 'react-redux'
import { createStore } from 'redux'


const StoreProvider = ({ value = [], ...props }) => {
  const store = createStore(reducer);
  return <Provider store={store} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

const selectCart = state => state.cart;
const selectCategories = state => state.categories;
const selectProducts = state => state.products;

export { StoreProvider, useStoreContext, selectCart, selectCategories, selectProducts };
