import type { Dispatch, SetStateAction } from 'react';

type VerifyProps = {
  key: string,
  val: boolean|number,
  set: Dispatch<SetStateAction<any>>,
}

type SaveProps = {
  key: string,
  val: boolean|number,
}

export const verifyKey = ({ key, val, set }: VerifyProps) => {
  const savedWaiting = sessionStorage.getItem(key);
  if (savedWaiting !== null) {
    const isSaved = savedWaiting === 'true';
    if (isSaved !== val) set(isSaved);
  }
}

export const saveSS = ({ key, val }: SaveProps) => {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(key, String(val));
}