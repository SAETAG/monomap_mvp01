import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Step6() {
  const router = useRouter();
  const [closetImage, setClosetImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setClosetImage(url);
  };

  const handleNext = () => {
    router.push('/tutorial/step7');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">ステップ⑥ 写真を撮ってAI提案を受けよう (6/7)</h2>

      <p className="mb-4">1. 空になったクローゼットの写真を撮影してください。</p>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileChange}
        className="mb-4"
      />
      {closetImage && (
        <div className="mb-4">
          <img src={closetImage} alt="closet" className="w-60 border border-gray-300" />
        </div>
      )}

      <p className="mb-4">
        2. AIが収納レイアウトの例を提案してくれます (仮)
      </p>

      <button 
        onClick={() => alert("AIアドバイス表示: '上段はシーズンオフ…' etc.")}
        className="px-4 py-2 bg-gray-300 rounded mr-2"
      >
        AIアドバイスを見る
      </button>
      <button 
        onClick={handleNext}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        写真をアップ完了 → 次へ
      </button>
    </div>
  );
}
