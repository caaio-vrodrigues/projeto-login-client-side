// components/Spinner.tsx
'use client';
import styles from './Spinner.module.css';

export const Spinner = () => 
  <span
    className={styles.spinner}
    role="status"
    aria-label={'Carregando…'}
    aria-live="polite"
    title={'Carregando'}
  />