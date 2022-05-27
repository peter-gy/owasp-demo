import { Button } from '@mantine/core';
import { getRoutes } from '@modules/routes/utils/route.util';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { fillDb } from '@modules/api/utils/api.util';

const Home: NextPage = () => {
  const [routes] = useState(getRoutes());
  const router = useRouter();
  const onInitializeDatabase = async () => {
    await fillDb();
  };

  return (
    <div className="h-screen flex flex-col space-y-5 justify-center items-center">
      <h1>OWASP Demo</h1>
      <Button onClick={onInitializeDatabase} size="xl">
        Initialize Database
      </Button>
      <div className="flex space-x-5">
        {routes.map((route, index) => (
          <Button key={index} onClick={() => router.push(route.path)} color="violet" size="xl">
            {route.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Home;
