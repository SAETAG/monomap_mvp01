// src/pages/bedroom/closet-step5-main.tsx

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ClosetStep5Main() {
  const router = useRouter();
  const [closetUser, setClosetUser] = useState("");
  const [seasonChange, setSeasonChange] = useState("");
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  const getAdvice = () => {
    const advice = `AIのアドバイス: 「${closetUser}」さんのクローゼットは、季節ごとの入れ替えについて「${seasonChange}」という傾向が見られます。最適なグルーピング方法は…`;
    setAiResponse(advice);
  };

  return (
    <div className="relative min-h-screen bg-green-100 p-6 flex flex-col items-center justify-center">
      {/* 上部左側のナビゲーションボタン */}
      <div className="absolute top-4 left-4 flex space-x-4">
        <button
          onClick={() => router.push('/bedroom/closet-step5-tutorial')}
          className="px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          前のステップに戻る
        </button>
        <button
          onClick={() => router.push('/bedroom/closet-step6-intro')}
          className="px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          次のステップに進む
        </button>
      </div>

      {/* タイトル */}
      <h2 className="text-2xl font-bold text-green-700 mb-2">
        Step5: 収納しやすいようにグルーピングしてみよう✨
      </h2>
      {/* サブタイトル */}
      <h3 className="text-xl text-green-800 mb-6">
        まずは、AIに最適なグルーピング方法を相談してみよう
      </h3>
      
      {/* ユーザー入力欄：クローゼットを使う人 */}
      <div className="mb-6 w-full max-w-md">
        <label className="block text-green-800 font-bold mb-2">
          クローゼットを使う人
        </label>
        <input
          type="text"
          value={closetUser}
          onChange={(e) => setClosetUser(e.target.value)}
          placeholder="例：自分のみ、家族全員、など"
          className="border border-green-300 p-2 rounded w-full"
        />
      </div>

      {/* ユーザー入力欄：季節毎にクローゼットの中身を入れ替えますか？ */}
      <div className="mb-6 w-full max-w-md">
        <label className="block text-green-800 font-bold mb-2">
          季節毎にクローゼットの中身を入れ替えますか？
        </label>
        <input
          type="text"
          value={seasonChange}
          onChange={(e) => setSeasonChange(e.target.value)}
          placeholder="例：はい、いいえ、または具体的な方法など"
          className="border border-green-300 p-2 rounded w-full"
        />
      </div>

      {/* AIに相談するボタン */}
      <button
        onClick={getAdvice}
        className="px-6 py-3 bg-green-400 text-white rounded-lg font-semibold hover:bg-green-500 transition mb-6"
      >
        AIに相談する
      </button>

      {/* AIの回答欄 */}
      {aiResponse && (
        <div className="p-4 bg-green-200 rounded shadow-md text-green-800 max-w-md text-center mb-6">
          <p>{aiResponse}</p>
        </div>
      )}
    </div>
  );
}
