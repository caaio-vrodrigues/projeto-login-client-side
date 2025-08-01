import styles from "./page.module.css";

import { Header } from "@/components/header/Header";
import { Main } from "@/components/main/Main";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return <>
    <Header/>
    <Main/>
    <Footer/>
  </>;
}
