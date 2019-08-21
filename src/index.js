import { h, app } from 'hyperapp';

import App from './components/app.jsx';
import './styles.css';

const state = { foo: 'bar' };

app({
  init: state,
  view: App,
  node: document.getElementById('app-root')
  // subscriptions: (s) => console.log('state', s),
});
