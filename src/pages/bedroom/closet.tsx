// pages/bedroom/closet1.tsx

import { useState } from 'react';
import { useRouter } from 'next/router';

type StorageOption = {
  id: string;
  name: string;
  selected: boolean;
  quantity: number;
};

export default function Closet1() {
  const router = useRouter();

  const defaultStorageOptions: StorageOption[] = [
    { id: 'shelf', name: '棚', selected: false, quantity: 0 },
    { id: 'clothing_case', name: '衣装ケース', selected: false, quantity: 0 },
    { id: 'basket', name: 'かご', selected: false, quantity: 0 },
    { id: 'hanger_rack', name: 'ハンガーラック', selected: false, quantity: 0 },
  ];

  const [storageOptions, setStorageOptions] = useState<StorageOption[]>(defaultStorageOptions);

  // チェックボックスで選択／非選択を切り替え、選択時は数量を1に初期化
  const toggleStorage = (id: string) => {
    setStorageOptions(
      storageOptions.map(option =>
        option.id === id
          ? { ...option, selected: !option.selected, quantity: !option.selected ? 1 : 0 }
          : option
      )
    );
  };

  // 数量の変更
  const handleQuantityChange = (id: string, quantity: number) => {
    setStorageOptions(
      storageOptions.map(option =>
        option.id === id ? { ...option, quantity } : option
      )
    );
  };

  // 選択された収納のカード内にある「片づけ開始」ボタンがクリックされたとき
  const handleStartTidying = (optionId: string) => {
    // 選択した収納オプションのIDをクエリとして渡して遷移（例: /bedroom/closet/tidying?storage=shelf）
    router.push(`/bedroom/closet/tidying?storage=${optionId}`);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* タイトル */}
      <h1 className="text-3xl font-bold mb-4 text-center">クローゼットの収納を選ぼう</h1>
      <p className="mb-6 text-center">収納の種類と個数を選択してください。</p>

      {/* 収納選択フォーム */}
      <div className="mb-8">
        {storageOptions.map(option => (
          <div key={option.id} className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={option.selected}
              onChange={() => toggleStorage(option.id)}
              className="mr-2"
            />
            <span className="mr-4">{option.name}</span>
            {option.selected && (
              <input
                type="number"
                min="1"
                value={option.quantity}
                onChange={(e) => handleQuantityChange(option.id, Number(e.target.value))}
                className="border px-2 py-1 w-20"
              />
            )}
          </div>
        ))}
      </div>

      {/* 選択された収納を表示するエリア */}
      <h2 className="text-2xl font-bold mb-4 text-center">選んだ収納</h2>
      <div className="grid grid-cols-2 gap-6">
        {storageOptions
          .filter(option => option.selected)
          .map(option => (
            <div
              key={option.id}
              className="relative flex flex-col items-center justify-center border-4 border-gray-800 rounded-lg p-4"
              style={{ width: '200px', height: '200px' }}
            >
              <div className="w-full h-3/4 flex items-center justify-center bg-indigo-200 rounded-md">
                <span className="text-xl font-bold">
                  {option.name} × {option.quantity}
                </span>
              </div>
              <button
                onClick={() => handleStartTidying(option.id)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                片づけ開始
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
