import { useEffect } from 'react';

export function Home() {
  useEffect(() => {
    fetch('http://localhost:3333/examples');
  }, []);

  return (
    <div className="App">
      <h1 className="text-red-800">Hello World</h1>
    </div>
  );
}
