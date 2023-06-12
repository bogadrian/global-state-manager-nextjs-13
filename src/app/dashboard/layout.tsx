import Link from 'next/link.js';

import { Comp2 } from '../../components/client/Comp2';
import { JotaiProvider } from '../../components/store';

const getData = async (): Promise<
  { id: string; name: string; role: string }[]
> => {
  const response = await fetch('http://localhost:3000/api/source', {
    cache: 'no-store'
  });
  const data = await response.json();

  return data;
};

const DashboardLayuot = async ({ children }: { children: React.ReactNode }) => {
  const data = await getData();

  return (
    <JotaiProvider>
      <div
        style={{
          width: '100%',
          height: '85%',
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <div
          style={{
            height: '100vh',
            width: '20vw',
            backgroundColor: '#383b39',
            textAlign: 'center',
            fontSize: '30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ marginBottom: '50px' }}>Dashboard layout</h3>
            {/* the prefetch set to false here means it won't prefetch the route but once it is mounted, it will be saved to cache anyway */}
            <Link href="/" style={{ color: 'white' }} prefetch={false}>
              Go Home
            </Link>
          </div>
          <h4 style={{ padding: '20px 0 20px 0', color: 'red' }}>Admin:</h4>
          {data.map(el => (
            <div key={el.id}>{el.role === 'admin' ? el.name : ''}</div>
          ))}
          <Comp2 data={data} />
        </div>
        <div
          style={{
            width: '100%',
            height: '85vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {children}
        </div>
      </div>
    </JotaiProvider>
  );
};

export default DashboardLayuot;
