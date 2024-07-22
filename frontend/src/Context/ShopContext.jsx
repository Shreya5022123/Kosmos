import React, { createContext } from 'react';
import all_product from '../components/Assets/all_product';

export const ShopcContext = createContext(null);

const ShopContextProvider = (props) => {
  const ContextValue = { all_product };
  return (
    <ShopcContext.Provider value={ContextValue}>
      {props.children}
    </ShopcContext.Provider>
  );
};

export default ShopContextProvider;