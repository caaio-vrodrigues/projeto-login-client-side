'use client';

import { 
  type ReactNode, type Dispatch, type SetStateAction,
  createContext, useState, useEffect,
} from 'react';

import { verifyKey, saveSS } from './sessionStorage';

type TProvider = {
  children: ReactNode;
}

type TContextMaster = {
  showCreateAcc: boolean,
  endPreview: boolean,
  loading: boolean,
  waitingServer: boolean,
  currentPage: number,
  errMsg: string | null,
  setShowCreateAcc: Dispatch<SetStateAction<boolean>>,
  setEndPreview: Dispatch<SetStateAction<boolean>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setWaitingServer: Dispatch<SetStateAction<boolean>>,
  setCurrentPage: Dispatch<SetStateAction<number>>,
  setErrMsg: Dispatch<SetStateAction<string|null>>,
}

const ContextMaster = createContext<TContextMaster>({
  showCreateAcc: false,
  endPreview: false,
  loading: false,
  waitingServer: true,
  currentPage: 0,
  errMsg: null,
  setShowCreateAcc: ()=>{},
  setEndPreview: ()=>{},
  setLoading: ()=>{},
  setWaitingServer: ()=>{},
  setCurrentPage: ()=>{},
  setErrMsg: ()=>{},
});
export default ContextMaster;

const PAGE_KEY = 'currentPage';
const WAITSERV_KEY = 'waitingServer';
const ENDPREV_KEY = 'finalizedInteraction';

export function ContextMasterProvider({ children }: TProvider): React.ReactNode {
  const [showCreateAcc, setShowCreateAcc] = useState<boolean>(false);
  const [endPreview, setEndPreview] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [waitingServer, setWaitingServer] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [errMsg, setErrMsg] = useState<string | null>(null);

  const contextValue: TContextMaster = {
    showCreateAcc, setShowCreateAcc,
    endPreview, setEndPreview,
    loading, setLoading,
    waitingServer, setWaitingServer,
    currentPage, setCurrentPage,
    errMsg, setErrMsg,
  }

  // Verificar e resgatar valores em session-storage
  useEffect(() => {
    if (typeof window === 'undefined') return;

    verifyKey({
      key: WAITSERV_KEY, 
      set: setWaitingServer, 
      val: waitingServer
    });

    verifyKey({
      key: ENDPREV_KEY, 
      set: setEndPreview, 
      val: endPreview
    });
  
    const savedPage = sessionStorage.getItem(PAGE_KEY);
    if (savedPage !== null) {
      const n = Number(savedPage);
      if (n !== currentPage) setCurrentPage(n);
    }
  }, []);

  // Salvar chave/valor no session-storage após verificação e resgate de valores
  useEffect(() => saveSS({key:WAITSERV_KEY, val:waitingServer}), [waitingServer]);
  useEffect(() => saveSS({key:ENDPREV_KEY, val:endPreview}), [endPreview]);
  useEffect(() => saveSS({key:PAGE_KEY, val:currentPage}), [currentPage]);

  return <>
    <ContextMaster.Provider value={contextValue}>
      {children}
    </ContextMaster.Provider>
  </>
}