import { h, app } from 'hyperapp';

import state from './state/state';
import * as routing from './lib/routing';

import Layout from './components/layout/layout.jsx';
import Router from './components/router.jsx';

import './app.css';

const View = (init) => (
  <Layout>
    <Router state={init} />
  </Layout>
);

app({
  init: state,
  view: View,
  node: document.getElementById('app-root'),
  // subscriptions: (s) => console.log('state', s),
  middleware(dispatch) {
    routing.register(dispatch);
    return dispatch;
  }
});
