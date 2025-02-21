import { useRouter } from 'next/router';

export default function Step3() {
  const router = useRouter();

  const handleComplete = () => {
    // 例: 「全部出した！」ボタン
    router.push('/tutorial/step4');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">ステップ③ クローゼットの中身を全部出そう (3/7)</h2>
      
      <p className="mb-4">
        まずはクローゼットから全てのアイテムを取り出して、
        床やテーブルに並べましょう。
      </p>

      <div className="flex gap-4">
        <button 
          onClick={() => alert("15分タイマー開始(仮)")}
          className="px-4 py-2 bg-gray-400 text-white rounded"
        >
          15分タイマー開始
        </button>
        <button 
          onClick={handleComplete}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          完了
        </button>
      </div>
    </div>
  );
}
