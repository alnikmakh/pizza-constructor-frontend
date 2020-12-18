import React from 'react';
import {GlobalStore, IGlobalStore} from './GlobalStore';

export const storeContext = React.createContext<IGlobalStore | null>(null);


export const StoreProvider: React.FC = ({children}) => {
  const store = new GlobalStore();
  return (
    <storeContext.Provider value={store}>
      {children}
    </storeContext.Provider>
  );
}
