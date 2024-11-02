import { Room } from '@/types';
import Link from 'next/link';

export default function RoomList({ rooms }: { rooms: Room[] }) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      { rooms !== null && rooms !== undefined && rooms.length >0 &&  (
        <ul className="divide-y divide-gray-200">
        {rooms.map((room) => (
          <li key={room.id}>
            <Link href={`/rooms/${room.id}`} className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-600 truncate">{room.name}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}