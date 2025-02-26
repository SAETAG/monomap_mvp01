// pages/bedroom/closet-step1-intro.tsx

import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// 動的インポートでSSRを無効化
const IntroVideo = dynamic(() => import('../../components/IntroVIdeo'), { ssr: false });

export default function ClosetStep1Intro() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-black">
      <IntroVideo />
      <div className="absolute top-4 left-0 right-0 flex justify-between px-6">
        <button
          onClick={() => router.push('/bedroom/closet-step4-intro')}
          className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          前のステップ画面に戻る
        </button>
        <button
          onClick={() => router.push('/bedroom/closet-step4-main')}
          className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          次のステップに進む
        </button>
      </div>
    </div>
  );
}
