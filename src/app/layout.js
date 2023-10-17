import Link from 'next/link'
import { Inter } from 'next/font/google'
import Cabecalho from '../components/Cabecalho/Cabecalho.jsx'
import Rodape from '../components/Rodape/Rodape.jsx'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body className={inter.className}>
        {/* <div>
            <Link href="/produtos/calca">CALÇA</Link>
            <Link href="/produtos/camisa">CAMISA</Link>
            <Link href="/produtos/bone">BONE</Link>
            <Link href="/produtos/sapato">SAPATO</Link>
            <Link href="/produtos/oculos">OCULOS</Link>
        </div> */}
        <Cabecalho />


        {children}
        
        <Rodape />
        {/* <p>RODAPÉ</p> */}
      </body>
    </html>
  )
}
