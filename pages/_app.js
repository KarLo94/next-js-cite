import Layout from '../components/Layout'
import Head from 'next/head';
import '@/styles/globals.css';



const App = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default App;