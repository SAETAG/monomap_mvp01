import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Step1() {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [dreamCloset, setDreamCloset] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

  const handleNext = () => {
    // 例：step1 完了 → step2へ
    router.push('/tutorial/step2');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">ステップ① 目標を決めよう (1/7)</h2>
      
      <ol className="list-decimal list-inside space-y-3 mb-4">
        <li>
          「ビフォー写真」を撮りましょう <br />
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange}
            className="mt-2"
          />
          {imagePreview && (
            <div className="mt-2">
              <img 
                src={imagePreview} 
                alt="before preview"
                className="w-60 border border-gray-300"
              />
            </div>
          )}
        </li>
        <li>
          理想のクローゼット像を入力してください <br />
          <textarea
            className="border border-gray-300 mt-2 w-full p-2"
            rows={3}
            placeholder="毎朝パッと服を選べるようにしたい..."
            value={dreamCloset}
            onChange={(e) => setDreamCloset(e.target.value)}
          />
        </li>
      </ol>

      <button
        onClick={() => alert("AIアドバイスを取得するAPIを呼び出す想定")}
        className="px-4 py-2 bg-gray-300 rounded mr-2"
      >
        AIアドバイスを確認する
      </button>

      <button 
        onClick={handleNext}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        次へ
      </button>
    </div>
  );
}
