import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to MONO:MAP</h1>
      <Link href="/drag-room">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          まずは、間取りを完成させよう！
        </button>
      </Link>
    </main>
  );
}
