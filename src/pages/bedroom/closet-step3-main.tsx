// pages/bedroom/closet-step1.tsx

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ClosetStep1() {
  const router = useRouter();
  
  // タイマーの状態（15分 = 900秒）
  const [timeLeft, setTimeLeft] = useState<number>(900);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // タイマー開始ボタンが押されたとき
  const startTimer = () => {
    setIsRunning(true);
  };

  // タイマーの更新処理
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-green-100 p-6">
      {/* 上部左側のナビゲーションボタン */}
      <div className="absolute top-4 left-4 flex space-x-4">
        <button
          onClick={() => router.push('/bedroom/closet-step3-tutorial')}
          className="px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          前のステップに戻る
        </button>
        <button
          onClick={() => router.push('/bedroom/closet-step4-intro')}
          className="px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          次のステップに進む
        </button>
      </div>

      {/* ステップタイトル */}
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Step3: クローゼットの中身を全部出してみよう✨
      </h2>
      {/* タイマーセクション */}
      <h1 className="text-3xl font-bold text-green-800 mb-4">
        15分でクローゼットの中身を全部出してみよう！
      </h1>
      <div className="flex items-center space-x-2 mb-4">
        {/* タイマーの絵（ここでは絵文字を利用） */}
        <span className="text-4xl">⏱️</span>
        {timeLeft > 0 ? (
          <span className="text-2xl font-bold">
            {Math.floor(timeLeft / 60).toString().padStart(2, '0')}:
            {(timeLeft % 60).toString().padStart(2, '0')}
          </span>
        ) : (
          <span className="text-2xl font-bold text-red-500">終わり!</span>
        )}
      </div>
      {/* スタートボタン（タイマーが動作していない場合のみ表示） */}
      {!isRunning && timeLeft > 0 && (
        <button
          onClick={startTimer}
          className="px-6 py-3 bg-green-400 text-white rounded-lg font-semibold hover:bg-green-500 transition"
        >
          スタート!
        </button>
      )}
    </div>
  );
}
