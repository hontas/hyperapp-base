import { h } from 'hyperapp';
import { preventDefault } from '@hyperapp/events';

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
  const [closest] = sortByDistances(location.path, paths);

  return (
    <div className={styles.notFound}>
      <h1>404 - Not Found</h1>
      <div>
        <span>Did you mean: </span>
        <Link to={closest}>{closest}</Link>
      </div>
    </div>
  );
};

export default ({ state }) => {
  const route = routes.find(({ path }) => path === state.location.path);
  const Comp = route ? route.component : NotFound;

  return <Comp {...state} />;
};

function navigate(path, state /* evt */) {
  const newState = {
    ...state,
    location: {
      ...state.location,
      path
    }
  };
  window.history.pushState(newState, '', path);
  return newState;
}

function sortByDistances(typoPath, paths) {
  const pathsDistance = {};

  return paths.slice().sort((a, b) => {
    if (!(a in pathsDistance)) {
      pathsDistance[a] = levenshtein(a, typoPath);
    }
    if (!(b in pathsDistance)) {
      pathsDistance[b] = levenshtein(b, typoPath);
    }

    return pathsDistance[a] - pathsDistance[b];
  });
}

function levenshtein(a, b) {
  if (a.length === 0) {
    return b.length;
  }
  if (b.length === 0) {
    return a.length;
  }

  const matrix = [];

  // increment along the first column of each row
  for (let i = 0; i <= b.length; i += 1) {
    matrix[i] = [i];
  }

  // increment each column in the first row
  for (let j = 0; j <= a.length; j += 1) {
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for (let i = 1; i <= b.length; i += 1) {
    for (let j = 1; j <= a.length; j += 1) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j] + 1 // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
}
