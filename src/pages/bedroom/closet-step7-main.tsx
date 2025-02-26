// src/pages/bedroom/closet-step6-main.tsx

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ClosetStep6Main() {
  const router = useRouter();
  
  // 撮影したアイテムのリスト（id, プレビュー画像URL, アイテム名）
  const [capturedItems, setCapturedItems] = useState<
    Array<{ id: number; preview: string; name: string }>
  >([]);

  // 空クローゼットの写真撮影用（実際のファイルは利用せずプレビュー表示のみ）
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      // ダミーで「アイテムX」という名前を生成
      const newItem = {
        id: Date.now(),
        preview: previewUrl,
        name: `アイテム${capturedItems.length + 1}`,
      };
      setCapturedItems([...capturedItems, newItem]);
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
          前のステップに戻る
        </button>
        <button
          onClick={() => router.push('/bedroom/closet-step8')}
          className="px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          次のステップに進む
        </button>
      </div>

      {/* ページ上部のタイトル */}
      <h2 className="text-2xl font-bold text-green-700 mb-2">
        Step7: 実際に収納していこう✨
      </h2>
      <h3 className="text-xl text-green-800 mb-6">
        各アイテムを収納する際に、その都度写真を撮影して、持ち物リストを自動生成します。
      </h3>

      {/* 空クローゼットの写真撮影用ファイル入力 */}
      <div className="mb-6">
        <input 
          type="file" 
          accept="image/*" 
          capture="environment"
          onChange={handleFileChange}
          className="border border-green-300 p-2 rounded"
        />
      </div>

      {/* 撮影したアイテムリストの表示 */}
      {capturedItems.length > 0 && (
        <div className="w-full max-w-md">
          <h3 className="text-green-800 font-bold mb-2">持ち物リスト</h3>
          <ul className="space-y-4">
            {capturedItems.map(item => (
              <li key={item.id} className="flex items-center space-x-4 border p-2 rounded shadow">
                <img
                  src={item.preview}
                  alt={item.name}
                  className="w-20 h-auto rounded"
                />
                <span className="text-lg font-semibold">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
