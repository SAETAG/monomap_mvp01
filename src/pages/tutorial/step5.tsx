import { useRouter } from 'next/router';

export default function Step5() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/tutorial/step6');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">ステップ⑤ グループ分けをしよう (5/7)</h2>

      <ol className="list-decimal list-inside space-y-2 mb-4">
        <li>用途別に分類 (普段着 / オフィス用 / シーズンオフ / etc.)</li>
        <li>使用頻度で分ける (毎日使う / 月1回 / 年数回 etc.)</li>
      </ol>

      <p className="mb-4">自由にグループ名を追加・編集してみましょう。</p>

      <button
        onClick={handleNext}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        グループ分け完了 → 次へ
      </button>
    </div>
  );
}
