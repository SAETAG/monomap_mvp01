import { useRouter } from 'next/router';

export default function Step4() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/tutorial/step5');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">ステップ④ 仕分けをしよう (4/7)</h2>

      <div className="mb-4 bg-gray-100 p-3 rounded">
        <strong>AIアシスタントのアドバイス（例）:</strong><br />
        「1年着ていない服は廃棄候補にしましょう」
      </div>

      <ol className="list-decimal list-inside space-y-2 mb-4">
        <li>捨てられるもの → 廃棄ボックスへ</li>
        <li>思い出として取っておきたいもの → 思い出ボックスへ</li>
        <li>別の場所に置くべきもの → ほかの場所ボックスへ</li>
      </ol>

      <button 
        onClick={() => alert("仕分け途中セーブも想定")}
        className="px-4 py-2 bg-gray-300 rounded mr-2"
      >
        途中セーブ
      </button>
      <button 
        onClick={handleNext}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        仕分け完了 → 次へ
      </button>
    </div>
  );
}
