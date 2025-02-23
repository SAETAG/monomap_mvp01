// pages/bedroom.tsx

import { useState } from 'react';
import { useRouter } from 'next/router';

type Furniture = {
  id: string;
  name: string;
  selected: boolean;
  quantity: number;
};

export default function Bedroom() {
  const router = useRouter();

  const defaultFurniture: Furniture[] = [
    { id: 'bed', name: 'ベッド', selected: false, quantity: 0 },
    { id: 'night_table', name: 'ナイトテーブル', selected: false, quantity: 0 },
    { id: 'closet', name: 'クローゼット', selected: false, quantity: 0 },
    { id: 'tansu', name: 'たんす', selected: false, quantity: 0 },
  ];

  const [furnitureList, setFurnitureList] = useState<Furniture[]>(defaultFurniture);
  const [newFurnitureName, setNewFurnitureName] = useState('');

  // チェックボックスの選択状態を更新（選択された場合、数量は1に初期化）
  const toggleFurniture = (id: string) => {
    setFurnitureList(furnitureList.map(item =>
      item.id === id ? { ...item, selected: !item.selected, quantity: !item.selected ? 1 : 0 } : item
    ));
  };

  // 数量の変更を反映
  const handleQuantityChange = (id: string, quantity: number) => {
    setFurnitureList(furnitureList.map(item =>
      item.id === id ? { ...item, quantity: quantity } : item
    ));
  };

  // カスタム家具を追加する（追加時は自動的に選択済みで数量は1）
  const addCustomFurniture = () => {
    if (!newFurnitureName.trim()) return;
    const newFurniture: Furniture = {
      id: Date.now().toString(), // 簡易ID
      name: newFurnitureName.trim(),
      selected: true,
      quantity: 1,
    };
    setFurnitureList([...furnitureList, newFurniture]);
    setNewFurnitureName('');
  };

  // 次の画面へ進む（選択された家具情報はコンソール出力）
  const handleProceed = () => {
    console.log('選択された家具:', furnitureList.filter(item => item.selected));
    router.push('/tutorial/closet'); // 次のチュートリアル画面へ遷移（例）
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">寝室にある家具を登録しよう✨</h1>
      <p className="mb-4">寝室にある家具にチェックを入れ、個数を選択してね✨</p>
      
      <div className="mb-6">
        {furnitureList.map(item => (
          <div key={item.id} className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => toggleFurniture(item.id)}
                className="mr-2"
              />
              {item.name}
            </label>
            {item.selected && (
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                className="border ml-4 px-2 py-1 w-20"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">カスタム家具を追加</h2>
        <input
          type="text"
          placeholder="家具の名前"
          value={newFurnitureName}
          onChange={(e) => setNewFurnitureName(e.target.value)}
          className="border px-2 py-1 mr-2"
        />
        <button
          onClick={addCustomFurniture}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          追加
        </button>
      </div>

      <button
        onClick={handleProceed}
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 font-bold"
      >
        寝室を完成させる✨
      </button>
    </div>
  );
}
