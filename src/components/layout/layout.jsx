import { h } from 'hyperapp';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import styles from './layout.css';

const Layout = (props, children) => (
  <div id="app" className={styles.app}>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
