import Link from "next/link";
import { useEffect, useState } from "react";

import styles from './Header.module.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Header: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId') || null;
    const accessToken = localStorage.getItem('access') || null;

    setUserId(userId);
    setAccessToken(accessToken);
  }, [])
  
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

            {userId && 
              <li className={styles["header__nav-menu-item"]}>
                <Link href={`/profile/${userId}`}>
                  <Button className={styles.header__link}>Profile</Button>
                </Link>
              </li>
            }
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
