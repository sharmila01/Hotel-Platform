import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to Hotel Admin</h1>
      <p>Redirecting is temporarily disabled for health checks.</p>
      <Link href="/hotels" style={{ color: 'blue', textDecoration: 'underline' }}>
        Click here to go to Hotels Management
      </Link>
    </div>
  );
}
