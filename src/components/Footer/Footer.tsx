import { Typography } from "@mui/material";
import Link from "next/link";
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <Typography textAlign="center" textTransform="uppercase">
          it is just a footer
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
