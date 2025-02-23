// pages/bedroom/closet.tsx

import { useRouter } from 'next/router';

export default function ClosetPage() {
  const router = useRouter();

  const handleStep1 = () => {
    router.push('/bedroom/closet-step1');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-200 p-6">
      <h1 className="text-4xl font-bold text-pink-500 mb-8">
        クローゼットの片づけを開始しましょう！
      </h1>
      <button 
        onClick={handleStep1}
        className="px-6 py-3 bg-pink-300 text-white font-semibold rounded-lg shadow-md hover:bg-pink-400 transition"
      >
        ステップ１：まずは現状を分析してみよう✨
      </button>
    </div>
  );
}
