import Heading from '../../components/Heading';
import Head from 'next/head';


export default function Catalog() {
  return (
    <>
    <Head>
      <title>Вид товара</title>
    </Head>
      <main>
        <Heading text='Каталог конкретного вида товара' />
      </main>
    </>
  )
}