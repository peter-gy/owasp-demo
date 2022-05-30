import { useState } from 'react';
import useFetch from './useFetch';
import ReactJson from 'react-json-view';

const UNPROTECTED_URL = 'http://localhost:3000/api/broken-access/cors-allow-all';
const PROTECTED_URL = 'http://localhost:3000/api/broken-access/cors-allow-same-origin';

function App() {
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
  const onUnprotectedClick = () => setSelectedUrl(UNPROTECTED_URL);
  const onProtectedClick = () => setSelectedUrl(PROTECTED_URL);
  return (
    <h1 className="min-h-[100vh] text-white text-4xl flex flex-col justify-center items-center">
      <div className="py-4 text-xl font-bold">
        <h1>Origin: localhost:4000</h1>
      </div>
      <div className="flex">
        <div className="p-2">
          <button className="btn btn-secondary" onClick={onUnprotectedClick}>
            Unprotected Request
          </button>
        </div>
        <div className="p-2">
          <button className="btn btn-secondary" onClick={onProtectedClick}>
            Protected Request
          </button>
        </div>
      </div>
      <div className="mt-4 p-4 w-[85vw] h-[75vh] min-h-[35vh] border-2 border-dashed rounded-lg flex flex-col justify-start items-center">
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
      {isLoading && <div className="font-bold"> </div>}
      {data && (
          <div className="mt-4 max-h-[65vh] overflow-scroll">
          <ReactJson src={data} theme="summerfruit:inverted" />
        </div>
      )}
      {hasError && <div className="mt-8 text-yellow-300 text-justify">{errorMessage}</div>}
    </div>
  );
}

export default App;
