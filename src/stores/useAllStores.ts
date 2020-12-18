import React from 'react';
import {storeContext} from './AllStoresProvider';
import {IGlobalStore} from './GlobalStore';
import {IUserStore} from './UserStore';


export const useAllStores = (): IGlobalStore => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store;
}

export const useUserStore = (): IUserStore => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store.userStore;
}
