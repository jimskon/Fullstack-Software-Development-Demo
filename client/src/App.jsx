import { useEffect, useState } from 'react';

export default function App() {
  const [hello, setHello] = useState('Loading...');
  const [status, setStatus] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const [helloRes, statusRes] = await Promise.all([
          fetch('/api/hello'),
          fetch('/api/status'),
        ]);

        const helloData = await helloRes.json();
        const statusData = await statusRes.json();

        setHello(helloData.message);
        setStatus(statusData);
      } catch (error) {
        setHello('Could not reach the backend.');
        setStatus({ error: error.message });
      }
    }

    loadData();
  }, []);

  return (
    <main className="page">
      <section className="card">
        <h1>React + Express Single-Server Scaffold</h1>
        <p>
          This frontend is built with Vite and served by the Express backend.
          There is no separate frontend dev server in this scaffold.
        </p>

        <div className="panel">
          <h2>GET /api/hello</h2>
          <pre>{hello}</pre>
        </div>

        <div className="panel">
          <h2>GET /api/status</h2>
          <pre>{JSON.stringify(status, null, 2)}</pre>
        </div>
      </section>
    </main>
  );
}
