import { getRoom, createSensorData, updateRoom, deleteRoom, getSensorData } from '../../../lib/api'
import SensorDataForm from '../../../components/SensorDataForm'
import RoomActions from '../../../components/RoomActions'
import { Thermometer, Droplet } from 'lucide-react'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function RoomDetail({ params }: PageProps) {
  const { id } = await params
  
  const sensorData = await getSensorData(id); 
  const room = await getRoom(id);

  async function addSensorData(temperature: number, humidity: number) {
    'use server'
    await createSensorData({ roomId: id, temperature, humidity })
  }

  async function editRoom(roomId: string, name: string) {
    'use server'
    await updateRoom(roomId, name)
  }

  async function removeRoom(roomId: string) {
    'use server'
    await deleteRoom(roomId)
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">{room.name}</h1>
      <RoomActions
        roomId={room.id}
        roomName={room.name}
        onEdit={editRoom}
        onDelete={removeRoom}
      />
      <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">Sensor Data</h2>
      <ul className="space-y-4">
        {sensorData.map((data) => (
          <li key={data.id} className="bg-gray-50 rounded-lg p-4 shadow-md">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Thermometer className="w-5 h-5 text-red-500 mr-2" />
                <span className="text-gray-700">Temperature: {data.temperature}°C</span>
              </div>
              <div className="flex items-center">
                <Droplet className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-gray-700">Humidity: {data.humidity}%</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Timestamp: {new Date(data.timestamp).toLocaleString()}</p>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Add New Sensor Data</h3>
        <SensorDataForm onSubmit={addSensorData} />
      </div>
    </div>
  )
}