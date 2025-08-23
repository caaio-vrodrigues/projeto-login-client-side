'use client';

import { 
  createContext, useState, useEffect, type ReactNode, type Dispatch, 
  type SetStateAction
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
  currentPage: number,
  setShowCreateAcc: Dispatch<SetStateAction<boolean>>,
  setInitServer: Dispatch<SetStateAction<boolean>>,
  setFinalizedInteraction: Dispatch<SetStateAction<boolean>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setWaitingServer: Dispatch<SetStateAction<boolean>>,
  setCurrentPage: Dispatch<SetStateAction<number>>,
}

const ContextMaster = createContext<TContextMaster>({
  showCreateAcc: false,
  initServer: false,
  finalizedInteraction: false,
  loading: false,
  waitingServer: true,
  currentPage: 0,
  setShowCreateAcc: ()=>{},
  setInitServer: ()=>{},
  setFinalizedInteraction: ()=>{},
  setLoading: ()=>{},
  setWaitingServer: ()=>{},
  setCurrentPage: ()=>{},
});
export default ContextMaster;

const CURRENT_PAGE_KEY = 'currentPage';
const WAITING_SERVER_KEY = 'waitingServer';

export function ContextMasterProvider({ children }: TProvider): React.ReactNode {
  const [showCreateAcc, setShowCreateAcc] = useState<boolean>(false);
  const [initServer, setInitServer] = useState<boolean>(false);
  const [finalizedInteraction, setFinalizedInteraction] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [waitingServer, setWaitingServer] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const contextValue: TContextMaster = {
    showCreateAcc, setShowCreateAcc,
    initServer, setInitServer,
    finalizedInteraction, setFinalizedInteraction,
    loading, setLoading,
    waitingServer, setWaitingServer,
    currentPage, setCurrentPage,
  }

   // Reidratar o sessionStorage após o mount (evita warning de hidratação)
  useEffect(() => {
    if (typeof window === 'undefined') return;
      const savedWaiting = sessionStorage.getItem(WAITING_SERVER_KEY);
      if (savedWaiting !== null) {
        const val = savedWaiting === 'true';
        if (val !== waitingServer) setWaitingServer(val);
      }
      const savedPage = sessionStorage.getItem(CURRENT_PAGE_KEY);
      if (savedPage !== null) {
        const n = Number(savedPage);
        if (Number.isFinite(n) && n !== currentPage) setCurrentPage(n);
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // roda só uma vez, após o mount

  // Persistir mudanças no sessionStorage
  useEffect(() => {
    sessionStorage.setItem(WAITING_SERVER_KEY, String(waitingServer));
  }, [waitingServer]);

  useEffect(() => {
    sessionStorage.setItem(CURRENT_PAGE_KEY, String(currentPage));
  }, [currentPage]);

  return <>
    <ContextMaster.Provider value={contextValue}>
      {children}
    </ContextMaster.Provider>
  </>
}