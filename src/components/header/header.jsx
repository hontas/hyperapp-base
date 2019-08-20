import { h } from 'hyperapp';

import { routes, Link } from '../router.jsx';
import styles from './header.css';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.linkList}>
      {routes.map(({ path, linkText }) => (
        <Link to={path} className={styles.link}>
          {linkText}
        </Link>
      ))}
    </nav>
  </header>
);

export default Header;
