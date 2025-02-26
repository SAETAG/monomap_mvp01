// src/pages/bedroom/closet-step1.tsx

import { useState } from 'react';
import { useRouter } from 'next/router';

type ChecklistItem = {
  id: number;
  title: string;
  description: string;
  selected: boolean;
};

export default function ClosetStep1() {
  const router = useRouter();

  // 初期チェックリスト
  const initialChecklist: ChecklistItem[] = [
    {
      id: 1,
      title: "1年以上着ていない服",
      description:
        "シーズンごとに確認し、1年以上袖を通していないものは手放す。",
      selected: false,
    },
    {
      id: 2,
      title: "サイズが合わない服",
      description: "体型が変わって着られなくなった服は処分。",
      selected: false,
    },
    {
      id: 3,
      title: "好きではない服",
      description:
        "デザインや色が好みでない、もらいものだけど着ていない服は手放す。",
      selected: false,
    },
    {
      id: 4,
      title: "痛んでいる服",
      description:
        "毛玉がひどい、色あせている、穴が開いているものは処分。",
      selected: false,
    },
    {
      id: 5,
      title: "似たような服",
      description:
        "同じデザインや色の服が複数ある場合、よく着るものだけを残す。",
      selected: false,
    },
    {
      id: 6,
      title: "コーディネートしにくい服",
      description:
        "ほかの服と合わせにくく、着る機会が少ないものは手放す。",
      selected: false,
    },
    {
      id: 7,
      title: "着心地が悪い服",
      description:
        "チクチクする、締め付けが強いなど、ストレスを感じる服は処分。",
      selected: false,
    },
    {
      id: 8,
      title: "昔の趣味やトレンドの服",
      description: "流行遅れで今の自分に合わないものは手放す。",
      selected: false,
    },
    {
      id: 9,
      title: "使わないバッグや靴",
      description: "傷んでいる、重すぎる、歩きにくいものは処分。",
      selected: false,
    },
    {
      id: 10,
      title: "古くなった下着や靴下",
      description: "ヨレヨレ、ゴムが伸びている、色褪せているものは交換。",
      selected: false,
    },
    {
      id: 11,
      title: "ノベルティやおまけの服",
      description: "イベントでもらったTシャツなど、着ていないものは処分。",
      selected: false,
    },
    {
      id: 12,
      title: "使っていないアクセサリー",
      description: "付ける機会がないものは整理。",
      selected: false,
    },
    {
      id: 13,
      title: "目的がないストールや帽子",
      description: "使わないファッション小物は見直し。",
      selected: false,
    },
  ];

  const [checklist, setChecklist] = useState<ChecklistItem[]>(initialChecklist);
  const [advice, setAdvice] = useState<string | null>(null);

  // チェックボックス切替
  const toggleChecklistItem = (id: number) => {
    setChecklist(
      checklist.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  // 仮のAI判断処理
  const consultAI = () => {
  // ここで実際にAIに問い合わせる処理を行う想定
    setAdvice(
      "AI判断：それは捨てていいと思いますよ！"
    );
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-green-100 p-6">
      {/* 上部ナビゲーションボタン */}
      <div className="absolute top-4 left-4 flex space-x-4">
        <button
          onClick={() => router.push('/bedroom/closet-step4-tutorial')}
          className="px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          前のステップに戻る
        </button>
        <button
          onClick={() => router.push('/bedroom/closet-step5-intro')}
          className="px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          次のステップに進む
        </button>
      </div>

      {/* ステップタイトル */}
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Step4: いらないものを選別してみよう✨
      </h2>

      {/* 捨てていいものリスト */}
      <h1 className="text-3xl font-bold text-green-800 mb-4">捨てていいものリスト</h1>
      <div className="mb-6 w-full max-w-2xl space-y-4">
        {checklist.map(item => (
          <div key={item.id} className="p-4 border border-green-300 rounded">
            <label className="flex items-start">
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => toggleChecklistItem(item.id)}
                className="mr-4 mt-1"
              />
              <div>
                <span className="text-xl font-semibold">{item.title}</span>
                <p className="text-green-700">{item.description}</p>
              </div>
            </label>
          </div>
        ))}
      </div>


            <div className="mb-6 w-full max-w-md">
        <input
          type="text"
          placeholder="捨てるか迷っているものを記入してください"
          className="border border-green-300 p-2 rounded w-full"
        />
        <p className="mt-2 text-green-700 text-center">は捨てていい？</p>
      </div>

            {/* AIに相談ボタン */}
      <button
        onClick={consultAI}
        className="px-6 py-3 bg-blue-400 text-white rounded-lg font-semibold hover:bg-blue-500 transition mb-6"
      >
        AIに相談
      </button>

      {/* AI判断結果表示 */}
      {advice && (
        <div className="p-4 bg-blue-200 rounded shadow-md text-blue-800 max-w-md text-center">
          <p>{advice}</p>
        </div>
      )}
    </div>
  );
}
