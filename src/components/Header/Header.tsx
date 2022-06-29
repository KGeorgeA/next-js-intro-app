import Link from "next/link";

import styles from './Header.module.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Typography noWrap textTransform="uppercase">
            NextJs App
          </Typography>
        </div>

        <div className={styles.header__nav}>
          <ul className={styles["header__nav-menu"]}>
            <li className={styles["header__nav-menu-item"]}>
              <Link href="/">
                <Button className={styles.header__link}>Home</Button>
              </Link>
            </li>

            <li className={styles["header__nav-menu-item"]}>
              <Link href="/users">
                <Button className={styles.header__link}>Users</Button>
              </Link>
            </li>

            <li className={styles["header__nav-menu-item"]}>
              <Link href="/profile">
                <Button className={styles.header__link}>Profile</Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
