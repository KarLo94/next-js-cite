import Heading from '../components/Heading';
import Head from 'next/head';

const Error = () => (
  <>
  <Head>
    <title>Error</title>
  </Head>
  <Heading text='Error' />
  <p>Что-то пошло не так</p>
  </>
);

export default Error;