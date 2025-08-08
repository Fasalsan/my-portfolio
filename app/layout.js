// app/layout.js
import './globals.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Fasal San Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <div className=''>
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  )
}
