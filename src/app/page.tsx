import { getRooms, createRoom, updateRoom, deleteRoom } from '../lib/api'
import RoomForm from '../components/RoomForm'
import RoomActions from '../components/RoomActions'
import RoomList from '@/components/RoomList'

export default async function Home() {
  const rooms = await getRooms()

  async function addRoom(name: string) {
    'use server'
    await createRoom(name)
  }

  async function editRoom(id: string, name: string) {
    'use server'
    await updateRoom(id, name)
  }

  async function removeRoom(id: string) {
    'use server'
    await deleteRoom(id)
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Rooms</h1>
      <div className="space-y-6">
        {rooms.map((room) => (
          <div key={room.id} className="bg-gray-50 rounded-lg p-6 shadow-md transition duration-300 ease-in-out hover:shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{room.name}</h2>
            <RoomList rooms={rooms}/>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Room</h2>
        <RoomForm onSubmit={addRoom} />
      </div>
    </div>
  )
}