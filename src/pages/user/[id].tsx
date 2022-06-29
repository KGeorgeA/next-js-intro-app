import Head from 'next/head';
import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';

import styles from '@/styles/Users.module.css';
import CoreLayout from 'src/layouts/Core';
import UserCard from '@/components/UserCard/UserCard';

import { UserType } from '@/utils/types';

const User: NextPage<{ user: UserType, error: Record<string, unknown> }> = ({ user, error }) => {
  console.log(user)
  return (
    <CoreLayout title={error ? 'Error' : 'User Page'}>
      {error ? <div>error</div> : <UserCard user={user} />}
    </CoreLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserType[] = await res.json();
  const paths = users.map((user) => ({
    params: { id: String(user.id) },
  }));

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps: GetStaticProps<{ data: { user: UserType, } | null, error: Record<string, unknown> | null }, { id: string }> = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/api/users/${params.id}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1NjQwNzc0MiwiZXhwIjoxNjU2NTgwNTQyfQ._EliW3fohZPwVDtXl949yKkyNfjlwOZscssbcbIVpfo'
    }
  });
  const { data } = await res.json();

  if (data.error) {
    return {
      props: {
        data: null,
        error: data.error,
      },
    }
  }

  console.log(data.user)

  return {
    props: {
      data: {
        user: data.user,
      },
      error: null,
    }
  }
};

export default User;
