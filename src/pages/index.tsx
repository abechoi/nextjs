import Head from 'next/head';
import Home from '@/components/Home';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const App = () => {
  return (
    <>
      <img src={`/logo2.png`} alt="preview" style={{ display: 'hidden'}}/>
      <Head>
        <title>AC Government Contracting</title>
      </Head>
      <Home/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;