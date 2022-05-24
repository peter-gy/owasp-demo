import { Button } from '@mantine/core';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Button color="violet" size="xl">
        I am a mantine component
      </Button>
    </div>
  );
};

export default Home;
