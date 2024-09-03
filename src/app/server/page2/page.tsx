import { Suspense } from 'react';

// Simulate a server-side fetch function
const fetchServerData = async () => {
  const response = await fetch('https://api.agify.io/?name=meelad');
  return response.json();
};

// Server-side component
const ServerPage2 = async () => {
  const data = await fetchServerData();
  
  return (
    <div>
      <h1>Server-Side Page 2</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ServerPage2;
