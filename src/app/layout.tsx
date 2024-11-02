import '../styles/globals.css'
import Link from 'next/link'

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Room Sensor Management',
  description: 'Manage rooms and sensor data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900">
        <div className="min-h-screen flex flex-col">
          <nav className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link href="/" className="flex-shrink-0 flex items-center text-white text-2xl font-bold">
                    Room Sensor Management
                  </Link>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link href="/" className="text-white hover:bg-purple-600 hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                      Rooms
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <main className="flex-grow container mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}