import { useRouter } from 'next/router';

export default function Step2() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/tutorial/step3');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">ステップ② 仕分けボックスを用意しよう (2/7)</h2>
      
      <ol className="list-decimal list-inside space-y-3 mb-4">
        <li>使わなくなった段ボールやカゴを3つ用意</li>
        <ul className="list-disc list-inside pl-4 text-gray-700">
          <li>廃棄ボックス</li>
          <li>思い出ボックス</li>
          <li>ほかの場所へ移動ボックス</li>
        </ul>
      </ol>

      <button 
        onClick={handleNext}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        OK、準備できた → 次へ
      </button>
    </div>
  );
}
