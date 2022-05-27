import { useState } from "react";
import useFetch from "./useFetch";

const UNPROTECTED_URL =
  "http://localhost:3000/api/broken-access/cors-allow-all";
const PROTECTED_URL =
  "http://localhost:3000/api/broken-access/cors-allow-same-origin";

function App() {
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
  const onUnprotectedClick = () => setSelectedUrl(UNPROTECTED_URL);
  const onProtectedClick = () => setSelectedUrl(PROTECTED_URL);
  return (
    <h1 className="h-screen text-white text-4xl flex flex-col justify-center items-center">
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
      <div className="mt-4 p-4 w-[85vw] h-[45vh] border-2 border-dashed rounded-lg flex flex-col justify-start items-center">
        {selectedUrl && <FetchResult url={selectedUrl} />}
        {!selectedUrl && (
          <div className="text-lg font-bold">Waiting for action...</div>
        )}
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
        <p className="mt-8 text-base font-code text-center">
          {JSON.stringify(data, null, 2)}
        </p>
      )}
      {hasError && (
        <div className="mt-8 text-yellow-300 text-justify">{errorMessage}</div>
      )}
    </div>
  );
}

export default App;
