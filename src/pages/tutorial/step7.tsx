import { useRouter } from 'next/router';
import { useState } from 'react';

type Item = {
  id: number;
  name: string;
  photoUrl?: string;
};

export default function Step7() {
  const router = useRouter();
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = () => {
    const newId = items.length + 1;
    setItems([...items, { id: newId, name: `アイテム${newId}` }]);
  };

  const handleComplete = () => {
    // チュートリアル完了へ
    router.push('/tutorial/complete');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">ステップ⑦ アイテム登録しながら収納 (7/7)</h2>

      <p className="mb-4">
        写真を撮って、名前やカテゴリを入力すれば、<br />
        「どこに入れたか」が紐づけられます。
      </p>

      <div className="mb-4">
        <button 
          onClick={handleAddItem}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          アイテムを追加 (仮)
        </button>
      </div>

      <ul className="space-y-2 mb-4">
        {items.map(item => (
          <li key={item.id} className="border-b border-gray-300 pb-2">
            {item.name} (写真アップロードなど後で拡張)
          </li>
        ))}
      </ul>

      <button 
        onClick={handleComplete}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        すべて登録完了 → チュートリアル完了
      </button>
    </div>
  );
}
