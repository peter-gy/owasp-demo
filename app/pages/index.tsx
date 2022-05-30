import { Button, Tooltip } from '@mantine/core';
import { getRoutes } from '@modules/routes/utils/route.util';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { fillDb } from '@modules/api/utils/api.util';
import Head from 'next/head';
import { DatabaseImport } from 'tabler-icons-react';

const Home: NextPage = () => {
  const [routes] = useState(getRoutes());
  const router = useRouter();
  const onInitializeDatabase = async () => {
    await fillDb();
  };

  return (
    <>
      <Head>
        <title>OWASP Demo</title>
      </Head>
      <div className="p-6 h-screen flex flex-col space-y-[10vh] justify-start items-center bg-primary">
        <h1 className="text-white font-bold">OWASP Demo</h1>
        <div className="flex flex-col justify-center items-center space-y-[12.5vh]">
          <Tooltip
            label="Setup the data schema to be used in the demo"
            position="top"
            placement="center"
            withArrow
          >
            <Button
              onClick={onInitializeDatabase}
              leftIcon={<DatabaseImport size={32} />}
              size="xl"
              color="green"
              styles={(_) => ({
                leftIcon: {
                  marginRight: 15
                }
              })}
            >
              Initialize Database
            </Button>
          </Tooltip>
          <div className="flex space-x-5">
            {routes.map((route, index) => (
              <Tooltip key={index} label="Visit the interactive demo" withArrow>
                <Button
                  onClick={() => router.push(route.path)}
                  variant="white"
                  color="indigo"
                  radius="md"
                  size="xl"
                >
                  {route.label} Demo
                </Button>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
