import Layout from '../components/Layout'
import Head from 'next/head';
import '@/styles/globals.css';
import { Inter } from '@next/font/google';

const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  preload: false,
})



const App = ({ Component, pageProps }) => (
  <div className={inter.className}>
  <Layout >
    <Head>
      
    </Head>
    <main >
      <Component {...pageProps} />
    </main>
  </Layout>
  </div>
);

export default App;