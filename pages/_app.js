import Layout from '../components/Layout'
import Head from 'next/head';
import '@/styles/globals.scss';
import { Inter } from 'next/font/google';
import styles from '../components/Layout.module.scss'

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
    <main className={styles.container}>
      <Component {...pageProps} />
    </main>
  </Layout>
  </div>
);

export default App;