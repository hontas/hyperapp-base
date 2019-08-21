import { h } from 'hyperapp';
import { preventDefault } from '@hyperapp/events';

import { navigate } from '../lib/routing';
import { getClosestMatch } from '../lib/levenshtein';
import Home from './home/home.jsx';
import About from './about/about.jsx';

import styles from './router.css';

export const routes = [
  {
    path: '/',
    component: Home,
    linkText: 'Home'
  },
  {
    path: '/about',
    component: About,
    linkText: 'About'
  }
];

export const Link = ({ to, className }, children) => (
  <a
    className={className}
    onClick={preventDefault((state, evt) => navigate(to, state, evt))}
    href={to}
  >
    {children}
  </a>
);

const NotFound = ({ location }) => {
  const paths = routes.map(({ path }) => path);
  if (!paths.length) return null;
  const suggestedPath = getClosestMatch(location.path, paths);

  return (
    <div className={styles.notFound}>
      <h1>404 - Not Found</h1>
      <div>
        <span>Did you mean: </span>
        <Link to={suggestedPath}>{suggestedPath}</Link>
      </div>
    </div>
  );
};

export default ({ state }) => {
  const route = routes.find(({ path }) => path === state.location.path);
  const Comp = route ? route.component : NotFound;

  return <Comp {...state} />;
};
