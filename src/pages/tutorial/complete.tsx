import { useRouter } from 'next/router';

export default function Complete() {
  const router = useRouter();

  const handleShare = () => {
    alert('SNSでシェア！（仮）');
  };

  const handleNext = () => {
    alert('次の片づけへ！（仮）');
  };

  const handleHome = () => {
    router.push('/');
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold mb-4">お疲れさまでした！ チュートリアル完了</h2>

      <p className="mb-2">ステップ100%  [■■■■■■■■]</p>
      
      <div className="border border-gray-300 p-3 mb-4 inline-block text-left">
        <strong>Before → After</strong>
        <div>ここにビフォー写真、アフター写真を並べて表示</div>
        <ul className="mt-2 list-disc list-inside text-sm">
          <li>仕分けたアイテム数：10着（仮）</li>
          <li>捨てたアイテム数：2着</li>
          <li>思い出ボックス行き：3着</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 justify-center">
        <button 
          onClick={handleShare}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          SNSでシェア
        </button>
        <button 
          onClick={handleNext}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          次の片づけに進む
        </button>
        <button 
          onClick={handleHome}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          ホームに戻る
        </button>
      </div>
    </div>
  );
}
