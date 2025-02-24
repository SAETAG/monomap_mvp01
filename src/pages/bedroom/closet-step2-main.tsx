// pages/bedroom/closet-step1.tsx

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ClosetStep1() {
  const router = useRouter();
  

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-green-100 p-6">
      {/* 上部左側のナビゲーションボタン */}
      <div className="absolute top-4 left-4 flex space-x-4">
        <button
          onClick={() => router.push('/bedroom/closet-step2-tutorial')}
          className="px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          前のステップに戻る
        </button>
        <button
          onClick={() => router.push('/bedroom/closet-step3-intro')}
          className="px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          次のステップに進む
        </button>
      </div>

      {/* ステップタイトル */}
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Step2: 事前準備をしよう✨
      </h2>

      {/* 「箱を三つ用意しよう」セクション */}
      <h1 className="text-3xl font-bold text-green-800 mb-4">
        箱を三つ用意しよう✨
      </h1>
      <div className="flex space-x-4">
        <div className="w-32 h-32 border-4 border-green-600 flex items-center justify-center rounded-lg bg-white">
          <span className="text-xl font-bold text-green-800">廃棄</span>
        </div>
        <div className="w-32 h-32 border-4 border-green-600 flex items-center justify-center rounded-lg bg-white">
          <span className="text-xl font-bold text-green-800">保留</span>
        </div>
        <div className="w-32 h-32 border-4 border-green-600 flex items-center justify-center rounded-lg bg-white">
          <span className="text-xl font-bold text-green-800">移動</span>
        </div>
      </div>
    </div>
  );
}
