import React, { PropsWithChildren, useState } from 'react';
import { Button, TextInput, Notification } from '@mantine/core';
import { X } from 'tabler-icons-react';
import dynamic from 'next/dynamic';
import { queryDB } from '@modules/api/utils/api.util';

const ReactJson = dynamic(
  () => import('react-json-view'),
  { ssr: false } // <-- not including this component on server-side
);

export default function SqlInjectionPage() {
  return (
    <div className="min-h-[100vh] p-4 flex bg-primary justify-around items-center">
      <BadPracticeExample />
    </div>
  );
}

function ExampleLayout({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <div className="min-h-[95vh] w-[45vw] border-2 border-white rounded-md bg-blue-50 p-4">
      <h2 className="mb-2 text-center text-xl font-bold">{title}</h2>
      {children}
    </div>
  );
}

function BadPracticeExample() {
  const [queryParam, setQueryParam] = useState<string | undefined>(undefined);
  const [rawQuery, setRawQuery] = useState<string | undefined>(undefined);
  const [queryResult, setQueryResult] = useState<any | null>(null);
  const [notification, setNotification] = useState<string | undefined>(undefined);
  // No sanitization
  const createVulnerableQuery = (query: string) => `SELECT * FROM users WHERE id = ${query}`;
  const handleSubmit = () => {
    if (queryParam) {
      const query = createVulnerableQuery(queryParam);
      setRawQuery(query);
      queryDB({ query })
        .then((result) => {
          setQueryResult(result);
        })
        .catch((error) => {
          setNotification(error.message);
        });
    } else {
      setNotification('Please enter an ID to query');
    }
  };
  return (
    <ExampleLayout title="Vulnerable Example">
      <div className="my-4">
        {notification && (
          <Notification
            icon={<X size={18} />}
            color="red"
            onClose={() => setNotification(undefined)}
          >
            {notification}
          </Notification>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <TextInput
          placeholder="ID Query"
          label="User ID"
          description="Search for user by ID"
          value={queryParam}
          onChange={(event) => setQueryParam(event.currentTarget.value)}
        />
        <div>
          <Button color="red" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
        {rawQuery && (
          <div className="my-2">
            <p className="font-code">{rawQuery}</p>
          </div>
        )}
        {queryResult && (
          <div className="m-y-2">
            <ReactJson src={queryResult} />
          </div>
        )}
      </div>
    </ExampleLayout>
  );
}
