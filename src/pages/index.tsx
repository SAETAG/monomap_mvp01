import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const startTutorial = () => {
    router.push('/tutorial'); 
    // => /tutorial/index.tsx が表示される
  };

  return (
    <main className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">
        クローゼットの整理をはじめましょう！
      </h1>
      <p>整理したいクローゼットの写真を撮り、理想を明確に…</p>
      <button 
        onClick={startTutorial} 
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
      >
        クローゼット片づけ開始！
      </button>
    </main>
  );
}
