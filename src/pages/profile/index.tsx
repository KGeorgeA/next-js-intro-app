import type { NextPage } from 'next'
import CoreLayout from 'src/layouts/Core';
import type { UserType } from '@/utils/types';
import UserCard from '../../components/UserCard/UserCard';

type ProfilePageProps = {
  data: {
    user: UserType;
  } | null;
  error: {statusCode: number, message: string, data: unknown} | null;
};

const ProfilePage: NextPage<ProfilePageProps> = ({ data, error }) => {
  if (!data) {
    return null;
  }
  return (
    <CoreLayout title="Profile">
      {error ? <div>{error.message}</div> : <UserCard user={data.user} />}
    </CoreLayout>
  )
}

export const getStaticProps = async ({ userId }: { userId: number }) => {
  // const res = await fetch(`http://localhost:4000/api/users/${userId}`).catch((err)=> console.log(err));
  const res = await fetch('http://localhost:4000/api/users/1', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1NjU4NzgzNCwiZXhwIjoxNjU2NzYwNjM0fQ.b0yfs-v3gJE41uo59s2FGSyUXwq2E-x2Ybur56sxQtA'
    }
  });

  const { data } = await res.json();

  if (data.error) {
    return {
      props: {
        data: null,
        error: data.error as {statusCode: number, message: string, data: unknown},
      },
    }
  }

  return {
    props: {
      data: {
        user: data.user as UserType,
      },
      error: null,
    }
  }
};

export default ProfilePage