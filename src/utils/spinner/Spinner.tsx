// components/Spinner.tsx
'use client';
import React from 'react';

import styles from './Spinner.module.css';

export const Spinner = () => {
  return <>
      <span
        className={styles.spinner}
        role="status"
        aria-label={'Carregando…'}
        aria-live="polite"
        title={'Carregando'}
      />
    </>
}