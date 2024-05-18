import React, {createContext, useContext} from 'react';
import {createRootStore, RootStore} from './stores/rootStore';

const RootStoreContext = createContext<RootStore | null>(null);

export const useRootStore = () => {
  const context = useContext(RootStoreContext);
  if (context === null) {
    throw new Error("You have forgotten to wrap your root component with RootStoreProvider");
  }
  return context;
};

export const RootStoreProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <RootStoreContext.Provider value={createRootStore()}>
      {children}
    </RootStoreContext.Provider>
  );
};