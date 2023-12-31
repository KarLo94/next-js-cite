import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.scss';

const Layout = ({children}) => (
  <div>
    <Header />
      {children}
    <Footer />
  </div>
);

export default Layout;
