import { Suspense } from 'react';

// Simulate a server-side fetch function
const fetchServerData = async () => {
  const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  return response.json();
};

// Server-side component
const ServerPage1 = async () => {
  const data = await fetchServerData();
  
  return (
    <div>
      <h1>Server-Side Page 1</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ServerPage1;
