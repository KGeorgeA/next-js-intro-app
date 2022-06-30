import type { GetStaticProps, NextPage } from 'next'
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

export const getStaticProps = async (context) => {
  const res = await fetch(`http://localhost:4000/api/users/${context.userId}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'Authorization': `Bearer ${accesToken}`
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