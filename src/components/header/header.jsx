import { h } from 'hyperapp';
import { Link } from '@hyperapp/router';

import { routes } from '../router.jsx';
import styles from './header.css';

const Header = (props) => (
  <header className={styles.header}>
    <nav className={styles.linkList}>
      {routes.map(({ href, linkText }) => (
        <Link to={href} className={styles.link}>
          {linkText}
        </Link>
      ))}
    </nav>
  </header>
);

export default Header;
