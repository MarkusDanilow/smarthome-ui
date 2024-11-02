export interface Room {
    id: string;
    name: string;
}

export interface SensorData {
    id: string;
    temperature: number;
    humidity: number;
    timestamp: string;
    roomId: string;
}
