'use client';

import { 
  type ReactNode, type Dispatch, type SetStateAction,
  createContext, useState, useEffect,
} from 'react';

import { saveKey } from './sessionStorage';

type TProvider = {
  children: ReactNode;
}

type TContextMaster = {
  showCreateAcc: boolean,
  endIntercation: boolean,
  loading: boolean,
  waitingServer: boolean,
  currentPage: number,
  errMsg: string | null,
  setShowCreateAcc: Dispatch<SetStateAction<boolean>>,
  setEndInteraction: Dispatch<SetStateAction<boolean>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setWaitingServer: Dispatch<SetStateAction<boolean>>,
  setCurrentPage: Dispatch<SetStateAction<number>>,
  setErrMsg: Dispatch<SetStateAction<string|null>>,
}

const ContextMaster = createContext<TContextMaster>({
  showCreateAcc: false,
  endIntercation: false,
  loading: false,
  waitingServer: true,
  currentPage: 0,
  errMsg: null,
  setShowCreateAcc: ()=>{},
  setEndInteraction: ()=>{},
  setLoading: ()=>{},
  setWaitingServer: ()=>{},
  setCurrentPage: ()=>{},
  setErrMsg: ()=>{},
});
export default ContextMaster;

const CURRENT_PAGE_KEY = 'currentPage';
const WAITING_SERVER_KEY = 'waitingServer';
const FINALIZED_INTERACTION = 'finalizedInteraction';

export function ContextMasterProvider({ children }: TProvider): React.ReactNode {
  const [showCreateAcc, setShowCreateAcc] = useState<boolean>(false);
  const [endIntercation, setEndInteraction] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [waitingServer, setWaitingServer] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [errMsg, setErrMsg] = useState<string | null>(null);

  const contextValue: TContextMaster = {
    showCreateAcc, setShowCreateAcc,
    endIntercation, setEndInteraction,
    loading, setLoading,
    waitingServer, setWaitingServer,
    currentPage, setCurrentPage,
    errMsg, setErrMsg,
  }

  // Salvar estados/valores no session-storage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    saveKey({
      key: WAITING_SERVER_KEY, 
      set: setWaitingServer, 
      val: waitingServer
    });
    saveKey({
      key: FINALIZED_INTERACTION, 
      set: setEndInteraction, 
      val: endIntercation
    });
  
    const savedPage = sessionStorage.getItem(CURRENT_PAGE_KEY);
    if (savedPage !== null) {
      const n = Number(savedPage);
      if (n !== currentPage) setCurrentPage(n);
    }
  }, []);

  // Persistir mudanças no session-storage
  useEffect(() => {
    sessionStorage.setItem(WAITING_SERVER_KEY, String(waitingServer));
    sessionStorage.setItem(FINALIZED_INTERACTION, String(endIntercation));
    sessionStorage.setItem(CURRENT_PAGE_KEY, String(currentPage));
  }, [waitingServer, endIntercation, currentPage]);

  return <>
    <ContextMaster.Provider value={contextValue}>
      {children}
    </ContextMaster.Provider>
  </>
}