'use client';

import { 
  createContext, useState, type ReactNode, type Dispatch, type SetStateAction 
} from 'react';

type TProvider = {
  children: ReactNode;
}

type TContextMaster = {
  showCreateAcc: boolean,
  setShowCreateAcc: Dispatch<SetStateAction<boolean>>,
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