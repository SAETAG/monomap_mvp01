// src/pages/bedroom/closet-step1.tsx

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ClosetStep1() {
  const router = useRouter();

  // スライド番号 (0〜4)
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // スライド1用: 画像アップロード
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // スライド2用: 問題点の記入
  const [problemText, setProblemText] = useState<string>("");

  // スライド3用: 希望するクローゼットのイメージ
  const [desiredCloset, setDesiredCloset] = useState<string>("コーデがすぐに決まるクローゼット");

  // スライド4用: AIアドバイス
  const [advice, setAdvice] = useState<string | null>(null);

  // ファイル選択時にプレビューURLを生成（スライド1）
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  // 仮のAIアドバイス取得処理（スライド4）
  const getAdvice = async () => {
    if (!selectedFile) {
      alert("まずは写真を撮ってください！");
      return;
    }
    // Dify.AI などと連携する処理を想定
    setAdvice("現状のクローゼットは散らかっているようです。不要なものを断捨離して、よく使うアイテムを前に出すと良いですよ！");
  };

  // 「完了」ボタンで次のスライドへ
  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  // 各スライドのコンテンツを描画
  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Step1: 目標を決めよう✨①
            </h2>
            <h1 className="text-3xl font-bold text-green-800 mb-8">
              今のクローゼットの写真を撮ってみよう✨
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
              onClick={nextSlide}
              className="px-6 py-3 bg-green-400 text-white rounded-lg font-semibold hover:bg-green-500 transition"
            >
              完了
            </button>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Step1: 目標を決めよう✨②
            </h2>
            <h1 className="text-3xl font-bold text-green-800 mb-8">
              現状のクローゼットの問題点を書き出してみよう✨
            </h1>
            <div className="mb-6 w-full max-w-md">
              <textarea
                value={problemText}
                onChange={(e) => setProblemText(e.target.value)}
                className="border border-green-300 p-2 rounded w-full h-32"
                placeholder="例：使っていない服が多い、収納が乱雑..."
              />
            </div>
            <button
              onClick={nextSlide}
              className="px-6 py-3 bg-green-400 text-white rounded-lg font-semibold hover:bg-green-500 transition"
            >
              完了
            </button>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Step1: 目標を決めよう✨③
            </h2>
            <h1 className="text-3xl font-bold text-green-800 mb-8">
              希望するクローゼットのイメージを考えてみよう✨
            </h1>
            <div className="mb-6 w-full max-w-md">
              <textarea
                value={problemText}
                onChange={(e) => setProblemText(e.target.value)}
                className="border border-green-300 p-2 rounded w-full h-32"
                placeholder="例：コーデがすぐに決まるクローゼット、すぐに取り出せる収納..."
              />
            </div>
            <button
              onClick={nextSlide}
              className="px-6 py-3 bg-green-400 text-white rounded-lg font-semibold hover:bg-green-500 transition"
            >
              完了
            </button>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Step1: 目標を決めよう✨④
            </h2>
            <h1 className="text-3xl font-bold text-green-800 mb-8">
              整理収納アドバイザーAIにアドバイスをもらってみよう✨
            </h1>
            <button
              onClick={getAdvice}
              className="px-6 py-3 bg-green-400 text-white rounded-lg font-semibold hover:bg-green-500 transition mb-6"
            >
              アドバイスをもらう
            </button>
            {advice && (
              <div className="p-4 bg-green-200 rounded shadow-md text-green-800 max-w-md text-center mb-6">
                <p>{advice}</p>
              </div>
            )}
            <button
              onClick={nextSlide}
              className="px-6 py-3 bg-green-400 text-white rounded-lg font-semibold hover:bg-green-500 transition"
            >
              完了
            </button>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-green-800 mb-8">
              ステップ１の全てのタスクが完了しました！
            </h1>
            <button
              onClick={() => router.push('/bedroom/closet-step2-intro')}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              完了画面へ進む
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-green-100 p-6">
      {/* 共通の上部ナビゲーション（必要なら追加） */}
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

      {renderSlide()}
    </div>
  );
}
