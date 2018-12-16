import { h } from 'hyperapp';
import styles from './home.css';

const Home = ({ className, actions }) => {
  return (
    <div className={`${styles.home} ${className}`}>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
