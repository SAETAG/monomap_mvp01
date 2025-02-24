// pages/bedroom/closet-step1.tsx

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ClosetStep1() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [advice, setAdvice] = useState<string | null>(null);
  const [desiredCloset, setDesiredCloset] = useState("コーデがすぐに決まるクローゼット");

  // ファイル選択時にプレビューURLを生成
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setAdvice(null); // 画像が変わったらアドバイスはリセット
    }
  };

  // 仮のAIアドバイス取得処理
  const getAdvice = async () => {
    if (!selectedFile) {
      alert("まずは写真を撮って、目標を書いてね✨");
      return;
    }
    // ここで Dify.AI へのAPIコールなどを行う想定
    setAdvice("現状のクローゼットは少し散らかっているようです。まずは不要なものを断捨離して、よく使うアイテムを前に出すと良いですよ！");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-green-100 p-6">
      {/* 上部左側のナビゲーションボタン */}
      <div className="absolute top-4 left-4 flex space-x-4">
        <button
          onClick={() => router.push('/bedroom/closet-step1-intro')}
          className="px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          前のステップに戻る
        </button>
        <button
          onClick={() => router.push('/bedroom/closet-step2-intro')}
          className="px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          次のステップに進む
        </button>
      </div>

      {/* ステップタイトル */}
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Step1: まずは目標を決めよう✨
      </h2>

      <h1 className="text-3xl font-bold text-green-800 mb-8">
        今のクローゼットの写真を撮ってみよう✨
      </h1>

      {/* ファイルアップロード */}
      <div className="mb-6">
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileChange}
          className="border border-green-300 p-2 rounded"
        />
      </div>

      {/* プレビュー画像 */}
      {previewUrl && (
        <div className="mb-6">
          <img
            src={previewUrl}
            alt="Preview"
            className="w-64 h-auto rounded shadow-md"
          />
        </div>
      )}

      <h1 className="text-3xl font-bold text-green-800 mb-8">
        どんなクローゼットにしたいか書いてみよう✨
      </h1>
      {/* ユーザーが希望するクローゼットのイメージ入力 */}
      <div className="mb-6 w-full max-w-md">
        
        <input
          type="text"
          value={desiredCloset}
          onChange={(e) => setDesiredCloset(e.target.value)}
          className="border border-green-300 p-2 rounded w-full"
        />
      </div>

      {/* 整理収納アドバイザーAIにアドバイスをもらってみようのタイトル */}
      <h1 className="text-3xl font-bold text-green-800 mb-4">
        整理収納アドバイザーAIにアドバイスをもらってみよう✨
      </h1>

      {/* AIアドバイス取得ボタン */}
      <button
        onClick={getAdvice}
        className="px-6 py-3 bg-green-400 text-white rounded-lg font-semibold hover:bg-green-500 transition mb-6"
      >
        整理収納アドバイザーAIにアドバイスをもらう
      </button>

      {/* アドバイス表示 */}
      {advice && (
        <div className="p-4 bg-green-200 rounded shadow-md text-green-800 max-w-md text-center">
          <p>{advice}</p>
        </div>
      )}
    </div>
  );
}
