import { Header } from "@/components/main/header/Header";
import { Main } from "@/components/main/Main";
import { Footer } from "@/components/main/footer/Footer";
import { Protected } from "@/auth/Protected";

export default function Home() {
  return <Protected>
    <Header/>
    <Main/>
    <Footer/>
  </Protected>;
}
