import { h, app } from 'hyperapp';
import { location } from '@hyperapp/router';

import { state } from './state/state';
import { actions } from './state/actions';

import Layout from './components/layout/layout.jsx';
import Router from './components/router.jsx';

import './app.css';

const View = (state, actions) => (
  <Layout>
    <Router state={state} actions={actions} />
  </Layout>
);

window.__app = app(state, actions, View, document.body);
const unsubscribe = location.subscribe(__app.location);
