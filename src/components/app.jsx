import { h } from 'hyperapp';
import styles from './app.css';

const App = (props) => {
  const toggle = (state) => ({
    ...state,
    foo: state.foo === 'bar' ? 'baz' : 'bar'
  });

  return (
    <div className={styles.app}>
      <h1>Begin here</h1>
      <div>foo: {props.foo}</div>
      <button onClick={toggle}>toggle foo</button>
    </div>
  );
};

export default App;
