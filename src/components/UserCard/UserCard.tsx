import Link from "next/link";

import styles from './UserCard.module.css';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MUILink from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { UserType } from "@/utils/types";

const UserCard: React.FC<{ user: UserType }> = ({ user }) => {
  if (!user) {
    return null;
  }
  return (
    <Grid item xs={3} md={2} className={styles.cardContainer}>
      <Box>
        <Typography>
          Full Name: <Link href={`/user/${user.id}`}>
            <MUILink>
              {user.fullName}
            </MUILink>
          </Link>
        </Typography>
      </Box>

      <Box>
        <Typography>
          Email: {user.email}
        </Typography>
      </Box>

      <Box>
        <Typography textAlign="justify">
          Phone: {user.phone}
        </Typography>
      </Box>

      <Box>
        <Typography>
          Role: {user.role}
        </Typography>
      </Box>
    </Grid>
  );
}

export default UserCard;
