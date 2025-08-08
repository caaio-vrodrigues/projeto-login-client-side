'use client';

import { createContext, useState, ReactNode } from 'react';

type TProvider = {
  children: ReactNode;
}

type TContextMaster = {
  showCreateAcc: boolean,
  setShowCreateAcc: React.Dispatch<React.SetStateAction<boolean>>,
}

const ContextMaster = createContext<TContextMaster>({
  showCreateAcc: false,
  setShowCreateAcc: () => {},
});
export default ContextMaster;

export function ContextMasterProvider({ children }: TProvider): React.ReactNode {
  const [showCreateAcc, setShowCreateAcc] = useState<boolean>(false);

  const contextValue: TContextMaster = {
    showCreateAcc, setShowCreateAcc,
  }

  return <>
    <ContextMaster.Provider value={contextValue}>
      {children}
    </ContextMaster.Provider>
  </>
}