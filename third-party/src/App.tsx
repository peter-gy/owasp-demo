function App() {
  const response = "Hello, world!";
  return (
    <h1 className="h-screen text-white text-4xl flex flex-col justify-center items-center">
      <div className="flex">
        <div className="p-2">
          <button className="btn btn-secondary">Unprotected Request</button>
        </div>
        <div className="p-2">
          <button className="btn btn-secondary">Protected Request</button>
        </div>
      </div>
      <div className="mt-4 p-4 w-[80vw] h-[30vh] border-2 border-dashed rounded-lg flex flex-col justify-start items-center">
        <h3>Response</h3>
        <p className="mt-2 text-base text-justify">{response}</p>
      </div>
    </h1>
  );
}

export default App;
