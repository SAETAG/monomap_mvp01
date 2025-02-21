import Link from 'next/link';

const steps = [
  { id: 1, title: 'ステップ① 目標を決めよう' },
  { id: 2, title: 'ステップ② 仕分けボックスを用意しよう' },
  { id: 3, title: 'ステップ③ クローゼットの中身を全部出そう' },
  { id: 4, title: 'ステップ④ 仕分けをしよう' },
  { id: 5, title: 'ステップ⑤ グループ分けをしよう' },
  { id: 6, title: 'ステップ⑥ 収納先の写真を撮る + AI提案' },
  { id: 7, title: 'ステップ⑦ アイテム写真を撮りながら収納' },
];

export default function TutorialIndex() {
  // ここでは進捗を計算せずに仮固定(0%)。実際はローカルストレージ等から読み込むと◎
  const progressPercentage = 0; 

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">片づけチュートリアル (クローゼット編)</h2>
        <button 
          className="text-sm border px-2 py-1 rounded"
          onClick={() => history.back()}
        >
          [× 閉じる]
        </button>
      </div>

      {/* 進捗バー */}
      <div className="mb-4">
        <div className="mb-1">ステップ{progressPercentage}%  [■□□□□□□□□]</div>
        <div className="w-full bg-gray-200 h-2 rounded">
          <div 
            className="bg-blue-500 h-2 rounded" 
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <ol className="list-decimal list-inside space-y-2 mt-4">
        {steps.map(step => (
          <li key={step.id}>{step.title}</li>
        ))}
      </ol>

      <div className="mt-8 text-center">
        <Link href="/tutorial/step1">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            ステップ①に進む
          </button>
        </Link>
      </div>
    </div>
  );
}
