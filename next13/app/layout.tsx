import './globals.css'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"]
})

export const metadata = {   //each page can have its own metadata object
  title: 'NEXT 13',
  description: 'Learning next js',
  keywords: "hello"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        <main className='container'>
        {children}
        </main>
      </body>
    </html>
  )
}
