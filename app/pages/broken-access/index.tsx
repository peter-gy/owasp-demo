import { useState } from 'react';
import useFetch from '@hooks/useFetch';

import dynamic from 'next/dynamic';
import { Button } from '@mantine/core';

const ReactJson = dynamic(
  () => import('react-json-view'),
  { ssr: false } // <-- not including this component on server-side
);

const UNPROTECTED_URL = 'http://localhost:3000/api/broken-access/cors-allow-all';
const PROTECTED_URL = 'http://localhost:3000/api/broken-access/cors-allow-same-origin';

function BrokenAccessPage() {
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
  const onUnprotectedClick = () => setSelectedUrl(UNPROTECTED_URL);
  const onProtectedClick = () => setSelectedUrl(PROTECTED_URL);
  return (
    <h1 className="min-h-[100vh] text-white text-4xl flex flex-col justify-center items-center bg-primary">
      <div className="py-4 font-bold">
        <h1 className="text-xl">Origin: localhost:3000</h1>
      </div>
      <div className="flex">
        <div className="p-2">
          <Button color="teal" size="md" onClick={onUnprotectedClick}>
            Unprotected Request
          </Button>
        </div>
        <div className="p-2">
          <Button color="teal" size="md" onClick={onProtectedClick}>
            Protected Request
          </Button>
        </div>
      </div>
      <div className="mt-4 p-4 w-[85vw] min-h-[35vh] border-2 border-dashed rounded-lg flex flex-col justify-start items-center">
        {selectedUrl && <FetchResult url={selectedUrl} />}
        {!selectedUrl && <div className="text-lg font-bold">Waiting for action...</div>}
      </div>
    </h1>
  );
}

function FetchResult({ url }: { url: string }) {
  const { data, isLoading, hasError, errorMessage } = useFetch(url);
  return (
    <div className="p-2 flex flex-col justify-center items-center text-sm sm:text-lg">
      <h3 className="font-code">{url}</h3>
      {isLoading && <div className="font-bold"></div>}
      {data && (
        <div className="mt-4">
          <ReactJson src={data} theme="summerfruit:inverted" />
        </div>
      )}
      {hasError && <div className="mt-8 text-yellow-300 text-justify">{errorMessage}</div>}
    </div>
  );
}

export default BrokenAccessPage;
