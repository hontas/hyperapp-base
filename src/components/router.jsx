import { h } from 'hyperapp';
import { Route } from '@hyperapp/router';

import Home from './home/home.jsx';

export const routes = [
  {
    path: '/',
    component: Home,
    linkText: 'Home'
  }
];

const withState = (component, props) => (routeProps) =>
  component({ ...props, ...routeProps });

export default (props) => (
  <main>
    {routes.map(({ path, component }) => (
      <Route path={path} render={withState(component, props)} />
    ))}
  </main>
);
