'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Edit2, Trash2, Save } from 'lucide-react'

type RoomActionsProps = {
  roomId: string
  roomName: string
  onEdit: (id: string, name: string) => Promise<void>
  onDelete: (id: string) => Promise<void>
}

export default function RoomActions({ roomId, roomName, onEdit, onDelete }: RoomActionsProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState(roomName)
  const router = useRouter()

  const handleEdit = async () => {
    if (isEditing) {
      await onEdit(roomId, editedName)
      setIsEditing(false)
      router.refresh()
    } else {
      setIsEditing(true)
    }
  }

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this room?')) {
      await onDelete(roomId)
      router.push('/')
      router.refresh()
    }
  }

  return (
    <div className="flex items-center space-x-2 mt-4">
      {isEditing ? (
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      ) : null}
      <button
        onClick={handleEdit}
        className={`${
          isEditing ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
        } text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center`}
      >
        {isEditing ? <Save className="w-4 h-4 mr-2" /> : <Edit2 className="w-4 h-4 mr-2" />}
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
      >
        <Trash2 className="w-4 h-4 mr-2" />
        Delete
      </button>
    </div>
  )
}