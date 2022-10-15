import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import AuthProvider from '../context/auth';
import { BgSound } from '../components/common';

function MyApp({ Component, pageProps }) {
  return (
    <BgSound>
      <AuthProvider>      
        <Component {...pageProps} />
      </AuthProvider>
    </BgSound>
  );
}

export default MyApp
