import styles from './TopBar.module.scss';
import logo from '../../assets/logo.svg';

const TopBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftContent}>
        <div className={styles.logo}>
          <img
            src={logo}
            alt="Logo"
          />
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default TopBar;
