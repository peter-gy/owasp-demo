import { Button } from '@mantine/core';
import { fillDb } from '@modules/api/utils/api.util';
import { getRoutes } from '@modules/routes/utils/route.util';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [routes] = useState(getRoutes());
  const router = useRouter();

  useEffect(() => {
    fillDb().then(console.log);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <h1>OWASP Project:</h1>
        <div className="flex space-x-5">
          {routes.map((route, index) => (
            <Button key={index} onClick={() => router.push(route.path)} color="violet" size="xl">
              {route.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
