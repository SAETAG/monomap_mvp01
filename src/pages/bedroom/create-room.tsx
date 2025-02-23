// pages/bedroom/create-room.tsx

import Link from 'next/link';
import Draggable from 'react-draggable';
import { useRef } from 'react';

type FurnitureItem = {
  id: string;
  name: string;
  defaultPosition: { x: number; y: number };
  bgColor: string;
  shape: string;
};

export default function CreateRoom() {
  // 各家具の初期設定
  const furnitureItems: FurnitureItem[] = [
    { id: 'night_table1', name: 'ナイトテーブル', defaultPosition: { x: 50, y: 50 }, bgColor: 'bg-yellow-300', shape: 'rounded-md' },
    { id: 'night_table2', name: 'ナイトテーブル', defaultPosition: { x: 250, y: 50 }, bgColor: 'bg-yellow-300', shape: 'rounded-md' },
    { id: 'chest', name: 'チェスト', defaultPosition: { x: 50, y: 250 }, bgColor: 'bg-green-300', shape: 'rounded-full' },
    { id: 'closet', name: 'クローゼット', defaultPosition: { x: 250, y: 250 }, bgColor: 'bg-blue-300', shape: 'rounded-lg' },
    { id: 'bed', name: 'ベッド', defaultPosition: { x: 150, y: 450 }, bgColor: 'bg-red-300', shape: 'rounded-md' },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* ページ上部のタイトル */}
      <h1 className="text-3xl font-bold mb-6 text-center">〇〇家の寝室</h1>

      {/* 太い罫線の枠内 */}
      <div className="relative border-4 border-black p-6 mb-8" style={{ width: '100%', height: '600px' }}>
        {furnitureItems.map(item => (
          <DraggableFurniture key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

// ドラッグ可能な家具コンポーネント（nodeRef を使用）
function DraggableFurniture({ item }: { item: FurnitureItem }) {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <Draggable defaultPosition={item.defaultPosition} nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className={`absolute ${item.bgColor} ${item.shape} flex items-center justify-center`}
        style={{ width: '150px', height: '150px' }}
      >
        {item.id === 'closet' ? (
          // クローゼットの場合、ENTERボタンを内部に埋め込む
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold mb-2">{item.name}</span>
            <Link href="/bedroom/closet">
              <button className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">
                ENTER
              </button>
            </Link>
          </div>
        ) : (
          // 他の家具は名前を表示
          <span className="text-lg font-bold">{item.name}</span>
        )}
      </div>
    </Draggable>
  );
}
