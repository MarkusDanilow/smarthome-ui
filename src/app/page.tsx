import { getRooms, createRoom } from '../lib/api'
import RoomForm from '../components/RoomForm'
import RoomList from '@/components/RoomList'

export default async function Home() {
  const rooms = await getRooms()

  async function addRoom(name: string) {
    'use server'
    await createRoom(name)
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Rooms</h1>
      <div className="space-y-6">
        <RoomList rooms={rooms}/>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Room</h2>
        <RoomForm onSubmit={addRoom} />
      </div>
    </div>
  )
}