import type { NextPage } from 'next'
import CoreLayout from 'src/layouts/Core';
import UserCard from '../../components/UserCard/UserCard';

type ProfilePageProps = {
  data: Record<string, unknown> | null;
  error: Record<string, unknown> | null;
};

const ProfilePage: NextPage<ProfilePageProps> = ({ data, error }) => {
  return (
    <CoreLayout title="Profile">
      {error ? <div>error</div> : <UserCard user={data.user} />}
    </CoreLayout>
  )
}

export const getStaticProps = async ({ userId }: { userId: number }) => {
  // const res = await fetch(`http://localhost:4000/api/users/${userId}`).catch((err)=> console.log(err));
  const res = await fetch('http://localhost:4000/api/users/1', {
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

  return {
    props: {
      data: {
        user: data.user,
      },
      error: null,
    }
  }
};

export default ProfilePage