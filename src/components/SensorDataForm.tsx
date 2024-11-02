'use client'

import { useState } from 'react'
import { PlusCircle } from 'lucide-react'

type SensorDataFormProps = {
  onSubmit: (temperature: number, humidity: number) => void
}

export default function SensorDataForm({ onSubmit }: SensorDataFormProps) {
  const [temperature, setTemperature] = useState('')
  const [humidity, setHumidity] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(parseFloat(temperature), parseFloat(humidity))
    setTemperature('')
    setHumidity('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="temperature" className="block text-sm font-medium text-gray-700">
          Temperature (°C)
        </label>
        <input
          type="number"
          step="0.1"
          name="temperature"
          id="temperature"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="humidity" className="block text-sm font-medium text-gray-700">
          Humidity (%)
        </label>
        <input
          type="number"
          step="0.1"
          name="humidity"
          id="humidity"
          value={humidity}
          onChange={(e) => setHumidity(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:scale-105"
      >
        <PlusCircle className="w-5 h-5 mr-2" />
        Add Sensor Data
      </button>
    </form>
  )
}