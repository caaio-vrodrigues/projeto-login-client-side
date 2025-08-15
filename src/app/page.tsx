import { Header } from "@/components/header/Header";
import { Main } from "@/components/main/Main";
import { Footer } from "@/components/footer/Footer";
import { Protected } from "@/components/login/auth/Protected";

export default function Home() {
  return <Protected>
    <Header/>
    <Main/>
    <Footer/>
  </Protected>;
}
