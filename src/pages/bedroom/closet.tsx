// pages/bedroom/closet.tsx

import { useRouter } from 'next/router';

export default function ClosetPage() {
  const router = useRouter();

  const handleStep1 = () => {
    router.push('/bedroom/closet-step1-intro');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-200 p-6">
      <h1 className="text-4xl font-bold text-pink-500 mb-8">
        クローゼットの片づけを開始しましょう！
      </h1>
      {/* ステップタイトル */}
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Step1: 目標を決めよう✨
      </h2>
      <h1 className="text-3xl font-bold text-green-800 mb-8">
        まずは、チュートリアル動画を見てみよう✨
      </h1>
      <button 
        onClick={handleStep1}
        className="px-6 py-3 bg-pink-300 text-white font-semibold rounded-lg shadow-md hover:bg-pink-400 transition"
      >
        動画を見る✨
      </button>
    </div>
  );
}
