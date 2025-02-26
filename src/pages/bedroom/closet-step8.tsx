// src/pages/bedroom/closet-step8.tsx
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ClosetStep8() {
  const router = useRouter();
  const [beforeFile, setBeforeFile] = useState<File | null>(null);
  const [beforePreview, setBeforePreview] = useState<string | null>(null);
  const [afterFile, setAfterFile] = useState<File | null>(null);
  const [afterPreview, setAfterPreview] = useState<string | null>(null);

  const handleBeforeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBeforeFile(file);
      setBeforePreview(URL.createObjectURL(file));
    }
  };

  const handleAfterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAfterFile(file);
      setAfterPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative min-h-screen bg-green-100 p-6 flex flex-col items-center">
      {/* 画面左上のナビゲーションボタン */}
      <div className="absolute top-4 left-4 flex space-x-4">
        <button
          onClick={() => router.push('/bedroom/closet-step7-main')}
          className="px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          前の画面に戻る
        </button>
  
      </div>

      {/* ページタイトル */}
      <h2 className="text-2xl font-bold text-green-700 mb-2">
        Step8: 収納後のクローゼットを記録しよう✨
      </h2>
      <h3 className="text-xl text-green-800 mb-6">
        収納前と収納後の写真を撮ってアップロードしてください
      </h3>

      {/* 収納前と収納後の写真アップロードセクション */}
      <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 mb-6 w-full max-w-4xl">
        {/* Before */}
        <div className="flex flex-col items-center">
          <label className="text-green-800 font-bold mb-2">Before</label>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleBeforeChange}
            className="border border-green-300 p-2 rounded mb-2"
          />
          {beforePreview && (
            <img
              src={beforePreview}
              alt="Before Preview"
              className="w-64 h-auto rounded shadow-md"
            />
          )}
        </div>
        {/* After */}
        <div className="flex flex-col items-center">
          <label className="text-green-800 font-bold mb-2">After</label>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleAfterChange}
            className="border border-green-300 p-2 rounded mb-2"
          />
          {afterPreview && (
            <img
              src={afterPreview}
              alt="After Preview"
              className="w-64 h-auto rounded shadow-md"
            />
          )}
        </div>
      </div>

      {/* 完了メッセージ */}
      <h1 className="text-5xl font-extrabold text-pink-500 mb-6 drop-shadow-lg text-center">
        これでクローゼットの片づけは完了です！お疲れ様でした！！
      </h1>

      {/* 下部のホームに戻るボタン */}
      <button
        onClick={() => router.push('/')}
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition"
      >
        ホームに戻る
      </button>
    </div>
  );
}
