import type { NextPage } from 'next';

import CoreLayout from 'src/layouts/Core';

const HomePage: NextPage = () => {
  return (
    <CoreLayout title="Home">
      <div>Home</div>
    </CoreLayout>
  )
}

export default HomePage;
