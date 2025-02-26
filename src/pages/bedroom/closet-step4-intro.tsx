// src/pages/bedroom/closet-step2-intro.tsx

import { useRouter } from 'next/router';

export default function ClosetStep2Intro() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-green-100 p-6">
      {/* 画面左上のナビゲーションボタン */}
      <div className="absolute top-4 left-4 flex space-x-4">
        <button
          onClick={() => router.push('/bedroom/closet-step3-main')}
          className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          前のステップに戻る
        </button>
        <button
          onClick={() => router.push('/bedroom/closet-step4-tutorial')}
          className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          次のステップに進む
        </button>
      </div>
       {/* ステップタイトル */}
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Step4: 「いらないものを分けてみよう」✨
      </h2>
      <h1 className="text-3xl font-bold text-green-800 mb-8">
        まずは、チュートリアル動画を見てみよう✨
      </h1>
      {/* 画面中央のボタン */}
      <button
        onClick={() => router.push('/bedroom/closet-step4-tutorial')}
        className="px-6 py-3 bg-blue-400 text-white rounded-lg font-bold hover:bg-blue-500 transition"
      >
        動画を見る✨
      </button>
    </div>
  );
}
