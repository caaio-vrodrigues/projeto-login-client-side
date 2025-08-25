import type { Dispatch, SetStateAction } from 'react';

type Save = {
  key: string,
  val: boolean,
  set: Dispatch<SetStateAction<any>>,
}

export const saveKey = ({ key, val, set }: Save) => {
  if (typeof window === 'undefined') return;
  const savedWaiting = sessionStorage.getItem(key);
  if (savedWaiting !== null) {
    const isSaved = savedWaiting === 'true';
    if (isSaved !== val) set(isSaved);
  }
}