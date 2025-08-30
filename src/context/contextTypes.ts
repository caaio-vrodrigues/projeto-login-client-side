import { 
  type ReactNode, type Dispatch, type SetStateAction,
} from 'react';

export type ProviderProps = { children: ReactNode; }

export type TContextMaster = {
  showCreateAcc: boolean, endPreview: boolean, loading: boolean, 
  waitingServer: boolean, currentPage: number, errMsg: string | null,
  setShowCreateAcc: Dispatch<SetStateAction<boolean>>,
  setEndPreview: Dispatch<SetStateAction<boolean>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setWaitingServer: Dispatch<SetStateAction<boolean>>,
  setCurrentPage: Dispatch<SetStateAction<number>>,
  setErrMsg: Dispatch<SetStateAction<string|null>>,
}