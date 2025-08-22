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
  finalizedInteraction: boolean,
  loading: boolean,
  waitingServer: boolean,
  page: number,
  setShowCreateAcc: Dispatch<SetStateAction<boolean>>,
  setInitServer: Dispatch<SetStateAction<boolean>>,
  setFinalizedInteraction: Dispatch<SetStateAction<boolean>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setWaitingServer: Dispatch<SetStateAction<boolean>>,
  setPage: Dispatch<SetStateAction<number>>,
}

const ContextMaster = createContext<TContextMaster>({
  showCreateAcc: false,
  initServer: false,
  finalizedInteraction: false,
  loading: false,
  waitingServer: true,
  page: 0,
  setShowCreateAcc: ()=>{},
  setInitServer: ()=>{},
  setFinalizedInteraction: ()=>{},
  setLoading: ()=>{},
  setWaitingServer: ()=>{},
  setPage: ()=>{},
});
export default ContextMaster;

export function ContextMasterProvider({ children }: TProvider): React.ReactNode {
  const [showCreateAcc, setShowCreateAcc] = useState<boolean>(false);
  const [initServer, setInitServer] = useState<boolean>(false);
  const [finalizedInteraction, setFinalizedInteraction] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [waitingServer, setWaitingServer] = useState(true);
  const [page, setPage] = useState<number>(0);

  const contextValue: TContextMaster = {
    showCreateAcc, setShowCreateAcc,
    initServer, setInitServer,
    finalizedInteraction, setFinalizedInteraction,
    loading, setLoading,
    waitingServer, setWaitingServer,
    page, setPage,
  }

  return <>
    <ContextMaster.Provider value={contextValue}>
      {children}
    </ContextMaster.Provider>
  </>
}