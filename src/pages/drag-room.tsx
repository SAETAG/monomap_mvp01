// pages/drag-room.tsx

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // ランダムID生成用(インストール: npm i uuid)
// npm i react-draggable を使う場合は import Draggable from 'react-draggable' など

type Room = {
  id: string;
  name: string;
  x: number;
  y: number;
};

export default function DragRoomPage() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [newRoomName, setNewRoomName] = useState('');

  // 部屋を追加する
  const handleAddRoom = () => {
    if (!newRoomName) return;
    setRooms([
      ...rooms,
      {
        id: uuidv4(),
        name: newRoomName,
        x: 50, // 適当な初期座標
        y: 50,
      },
    ]);
    setNewRoomName(''); // 入力をクリア
  };

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <div style={{ padding: 16, background: '#f1f1f1' }}>
        <h1>部屋の間取りを登録しよう</h1>
        <h2>ドラッグ＆ドロップで部屋を配置</h2>
        <input
          type="text"
          placeholder="部屋の名前"
          value={newRoomName}
          onChange={(e) => setNewRoomName(e.target.value)}
          style={{ marginRight: 8 }}
        />
        <button
            onClick={handleAddRoom}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-bold"
        >
            新しい部屋を登録
        </button>
      </div>

      {/* 部屋を描画 */}
      {rooms.map((room) => (
        <DraggableRoom
          key={room.id}
          room={room}
          onUpdate={(updated) => {
            // 位置更新されたらroomsを更新
            setRooms(rooms.map((r) => (r.id === room.id ? updated : r)));
          }}
        />
      ))}
    </div>
  );
}

// ここで1つ1つの部屋(四角)をドラッグ可能にするコンポーネント
function DraggableRoom({
  room,
  onUpdate,
}: {
  room: Room;
  onUpdate: (updated: Room) => void;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    // クリック位置とroom.x, room.yの差を計算
    const offsetX = e.clientX - room.x;
    const offsetY = e.clientY - room.y;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;
    onUpdate({ ...room, x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: room.x,
        top: room.y,
        width: 100,
        height: 100,
        background: 'lightblue',
        border: '2px solid #777',
        cursor: 'move',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {room.name}
    </div>
  );
}
