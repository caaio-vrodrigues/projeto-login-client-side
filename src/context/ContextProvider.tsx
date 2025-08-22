'use client';

import { 
  createContext, useState, type ReactNode, type Dispatch, type SetStateAction 
} from 'react';

type TProvider = {
  children: ReactNode;
}

type TContextMaster = {
  showCreateAcc: boolean,
  initServer: boolean,
  initDb: boolean,
  setShowCreateAcc: Dispatch<SetStateAction<boolean>>,
  setInitServer: Dispatch<SetStateAction<boolean>>,
  setInitDb: Dispatch<SetStateAction<boolean>>,
}

const ContextMaster = createContext<TContextMaster>({
  showCreateAcc: false,
  initServer: false,
  initDb: false,
  setShowCreateAcc: ()=>{},
  setInitServer: ()=>{},
  setInitDb: ()=>{},
});
export default ContextMaster;

export function ContextMasterProvider({ children }: TProvider): React.ReactNode {
  const [showCreateAcc, setShowCreateAcc] = useState<boolean>(false);
  const [initServer, setInitServer] = useState<boolean>(false);
  const [initDb, setInitDb] = useState<boolean>(false);

  const contextValue: TContextMaster = {
    showCreateAcc, setShowCreateAcc,
    initServer, setInitServer,
    initDb, setInitDb,
  }

  return <>
    <ContextMaster.Provider value={contextValue}>
      {children}
    </ContextMaster.Provider>
  </>
}