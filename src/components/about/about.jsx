import { h } from 'hyperapp';
import styles from './about.css';

const About = ({ className }) => {
  return (
    <div className={`${styles.about} ${className}`}>
      <h1>About</h1>
    </div>
  );
};

export default About;
