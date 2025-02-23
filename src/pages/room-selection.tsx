// pages/room-selection.tsx

import Link from 'next/link';

export default function RoomSelection() {
  const rooms = [
    { id: 1, name: '寝室', link: '/bedroom' },
    { id: 2, name: 'キッチン', link: '/kitchen' },
    { id: 3, name: 'リビング', link: '/living' },
    { id: 4, name: 'バストイレ', link: '/bath-toilet' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">部屋を選択してください</h1>
      <div className="grid grid-cols-2 gap-8">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="relative w-64 h-64 border border-gray-400 bg-white flex items-center justify-center shadow-md"
          >
            {/* 上部に部屋名とENTERボタン */}
            <div className="absolute top-4 left-4 right-4 flex flex-col items-center">
              <span className="text-xl font-semibold mb-2">{room.name}</span>
              {room.name === '寝室' ? (
                <Link href={room.link}>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    ENTER
                  </button>
                </Link>
              ) : (
                <button
                  disabled
                  className="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"
                >
                  ENTER
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
