import { Header } from '@/components/main/header/Header';
import { Main } from '@/components/main/Main';
import { Footer } from '@/components/main/footer/Footer';
import { Protected } from '@/auth/Protected';

const Home = () => 
  <Protected>
    <Header/>
    <Main/>
    <Footer/>
  </Protected>;

export default Home;
