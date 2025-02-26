// src/pages/bedroom/closet-step6-main.tsx

import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function ClosetStep6Main() {
  const router = useRouter();
  
  // 空クローゼットの写真用の状態
  const [emptyClosetFile, setEmptyClosetFile] = useState<File | null>(null);
  const [emptyClosetPreview, setEmptyClosetPreview] = useState<string | null>(null);
  
  // AI提案の結果用の状態
  const [aiSuggestion, setAiSuggestion] = useState<string | null>(null);
  
  // 空クローゼット写真のアップロードハンドラ
  const handleEmptyClosetFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setEmptyClosetFile(file);
      const previewUrl = URL.createObjectURL(file);
      setEmptyClosetPreview(previewUrl);
      setAiSuggestion(null); // 新たに写真がアップロードされたらアドバイスをリセット
    }
  };
  
  // 仮のAI提案取得処理
  const getAISuggestion = () => {
    if (!emptyClosetFile) {
      alert("まずは空になったクローゼットの写真を撮影してください！");
      return;
    }
    // ここで実際にAIへ問い合わせる処理を入れる想定
    setAiSuggestion("AI提案: 空クローゼットに左右に収納棚と中央に引き出しを配置すると、スペースを有効活用できます！");
  };

  // コミュニティページへの遷移（仮）
  const goToCommunity = () => {
    router.push('/bedroom/closet-step6-community');
  };

  // プロ相談ページへの遷移（仮）
  const goToProChat = () => {
    router.push('/bedroom/closet-step6-prochat');
  };

  return (
    <div className="min-h-screen bg-green-100 p-6 flex flex-col items-center justify-center">
      {/* 画面左上のナビゲーションボタン */}
      <div className="absolute top-4 left-4 flex space-x-4">
        <button
          onClick={() => router.push('/bedroom/closet-stap6-tutorial')}
          className="px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          前のステップに戻る
        </button>
        <button
          onClick={() => router.push('/bedroom/closet-step7-intro')}
          className="px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          次のステップに進む
        </button>
      </div>
      
      {/* ページ上部のタイトル */}
      <h2 className="text-2xl font-bold text-green-700 mb-2">
        Step6: 収納プランの検討と決定
      </h2>
      <h3 className="text-xl text-green-800 mb-6">
        空のクローゼットを撮影して、最適な収納レイアウトを考えよう！
      </h3>
      
      {/* Action①: 空クローゼットの写真撮影 */}
      <div className="mb-6">
        <input 
          type="file" 
          accept="image/*" 
          capture="environment"
          onChange={handleEmptyClosetFileChange}
          className="border border-green-300 p-2 rounded"
        />
      </div>
      {emptyClosetPreview && (
        <div className="mb-6 relative" style={{ width: '256px', height: '256px' }}>
          <Image 
            src={emptyClosetPreview}
            alt="Empty Closet Preview"
            layout="fill"
            objectFit="contain"
            className="rounded shadow-md"
          />
        </div>
      )}

      {/* Action②: 収納提案の活用 */}
      <div className="mb-6 w-full max-w-md">
        <h3 className="text-xl font-bold text-green-800 mb-4">
          収納提案の活用
        </h3>
        <div className="flex flex-col space-y-4">
          <button
            onClick={getAISuggestion}
            className="px-6 py-3 bg-blue-400 text-white rounded-lg font-semibold hover:bg-blue-500 transition"
          >
            【AI相談機能】収納レイアウト提案を受ける
          </button>
          <button
            onClick={goToCommunity}
            className="px-6 py-3 bg-purple-400 text-white rounded-lg font-semibold hover:bg-purple-500 transition"
          >
            【コミュニティ】他の収納事例を見る
          </button>
          <button
            onClick={goToProChat}
            className="px-6 py-3 bg-orange-400 text-white rounded-lg font-semibold hover:bg-orange-500 transition"
          >
            【プロ相談】専門家にチャットで相談する
          </button>
        </div>
      </div>

      {/* AI提案結果表示 */}
      {aiSuggestion && (
        <div className="p-4 bg-blue-200 rounded shadow-md text-blue-800 max-w-md text-center">
          <p>{aiSuggestion}</p>
        </div>
      )}
    </div>
  );
}
