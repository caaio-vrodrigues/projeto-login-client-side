import styles from '@/components/main/Main.module.css';

import { Contacts } from './contacts/Contacts';
import { Description } from './description/Description';
import { Welcome } from './welcome/Welcome';
import { Specialties } from './specialties/Specialties';

export const Main = () => 
  <main className={styles.main}>
    <Welcome/>
    <Description/>
    <Specialties/>
    <Contacts/>
  </main>
  