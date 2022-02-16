import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return <>
        <div className='antialiased bg-blue-100'>
          <Header />
              <Component {...pageProps} />
          <Footer />
        </div>
       
         </>
  }

export default MyApp
