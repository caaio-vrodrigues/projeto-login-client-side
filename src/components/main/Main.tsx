import styles from '@/components/main/Main.module.css';

import { Contacts } from './contacts/Contacts';
import { Description } from './description/Description';
import { Welcome } from './welcome/Welcome';

export const Main = () => 
  <main className={styles.main}>
    <Welcome/>
    <Description/>
    <Contacts/>
  </main>
  