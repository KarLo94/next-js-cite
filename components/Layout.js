import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = ({children}) => (
  <div className={styles.container}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;