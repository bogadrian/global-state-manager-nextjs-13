import styles from './page.module.css';
import Link from 'next/link.js';

const getData = async () => {
  const response = await fetch('http://localhost:3000/api/source');
  const data = await response.json();

  return data;
};

export default async function Home() {
  const data = await getData();
  return (
    <main className={styles.main}>
      <div>
        <h1 style={{ marginBottom: '50px' }}>{data[0].name}</h1>
        <Link href="/dashboard" prefetch={false}>
          <span style={{ color: 'white', fontSize: '40px' }}>
            Go to dashboard
          </span>
        </Link>
      </div>
    </main>
  );
}
