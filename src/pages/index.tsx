import { CurrencyQuotesList } from '@/components/CurrencyQuotesList'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className={`dark:bg-gray-900 ${inter.className}`}>
      <Header />
      <div className="container mx-auto my-4">
        <h1 className="text-white text-2xl mb-2">Todas as moedas</h1>
        <CurrencyQuotesList />
      </div>
      <Footer />
    </main>
  )
}
