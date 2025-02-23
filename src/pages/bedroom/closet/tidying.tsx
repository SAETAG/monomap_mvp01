// pages/bedroom/closet/tidying.tsx

import { useRouter } from 'next/router';

export default function TidyingPage() {
  const router = useRouter();
  const { storage } = router.query;

  return (
    <div className="min-h-screen p-6 bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">収納片づけ開始</h1>
      
      {storage ? (
        <p className="mb-4 text-xl">
          選択された収納: <span className="font-bold">{storage}</span>
        </p>
      ) : (
        <p className="mb-4 text-xl">収納が選択されていません</p>
      )}
      
      {/* ここにさらに片づけの手順やUIを追加していく */}
      <button
        onClick={() => alert('片づけ開始の処理（仮）')}
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        片づけを開始する
      </button>
    </div>
  );
}
