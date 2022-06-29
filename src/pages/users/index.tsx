import Head from 'next/head';
import type { NextPage } from 'next';

import styles from '@/styles/Users.module.css';
import Grid from '@mui/material/Grid';
import CoreLayout from 'src/layouts/Core';
import UserCard from '@/components/UserCard/UserCard';

import { UserType } from '@/utils/types';

const Users: NextPage<{ users: UserType[] }> = ({ users }) => {

  return (
    <CoreLayout title="Users">
      <Grid container spacing={2} className={styles.users__container}>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />
        })}
      </Grid>
    </CoreLayout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:4000/api/users/');

  const { data } = await res.json();

  return {
    props: {
      users: data.list,
      count: data.total,
    }
  }
};

export default Users;
