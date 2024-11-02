import { Room, SensorData } from '@/types';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_API_KEY
  }
});

export const getRooms = (): Promise<Room[]> => api.get('/rooms').then(res => res.data);
export const createRoom = (name: string): Promise<Room> => api.post('/rooms', { name }).then(res => res.data);
export const getRoom = (roomId: string): Promise<Room> => api.get(`/rooms/${roomId}`).then(res => res.data);
export const updateRoom = (id: string, name: string): Promise<Room> => api.put(`/rooms/${id}`, { name }).then(res => res.data);
export const deleteRoom = (id: string): Promise<void> => api.delete(`/rooms/${id}`);

export const getSensorData = (roomId: string): Promise<SensorData[]> => api.get(`/sensor-data/room/${roomId}`).then(res => res.data);
export const createSensorData = (data: { roomId: string, temperature: number; humidity: number }): Promise<SensorData> => 
  api.post(`/sensor-data`, data).then(res => res.data);