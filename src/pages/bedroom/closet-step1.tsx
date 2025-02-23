// pages/bedroom/closet-step1.tsx

import { useState } from 'react';

export default function ClosetStep1() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [advice, setAdvice] = useState<string | null>(null);

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
      alert("まずは写真を撮ってください！");
      return;
    }
    // ここで Dify.AI へのAPIコールなどを行う想定
    // 今回は仮のメッセージを表示
    setAdvice("現状のクローゼットは少し散らかっているようです。まずは不要なものを断捨離して、よく使うアイテムを前に出すと良いですよ！");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-8">
        まずは、今のクローゼットの写真を撮ってみよう✨
      </h1>

      <div className="mb-6">
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileChange}
          className="border border-green-300 p-2 rounded"
        />
      </div>

      {previewUrl && (
        <div className="mb-6">
          <img
            src={previewUrl}
            alt="Preview"
            className="w-64 h-auto rounded shadow-md"
          />
        </div>
      )}

      <button
        onClick={getAdvice}
        className="px-6 py-3 bg-green-400 text-white rounded-lg font-semibold hover:bg-green-500 transition mb-6"
      >
        整理収納アドバイザーAIにアドバイスをもらう
      </button>

      {advice && (
        <div className="p-4 bg-green-200 rounded shadow-md text-green-800 max-w-md text-center">
          <p>{advice}</p>
        </div>
      )}
    </div>
  );
}
