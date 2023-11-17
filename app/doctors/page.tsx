import Link from 'next/link'
import React from 'react'

export default function Doctors() {
  return (
    <div className='flex min-h-screen flex-col'>
      <div>
        <ul className='flex flex-wrap justify-center'>
          <li className='border-2 border-cyan-200 rounded-lg px-3 py-2 m-2 inline-flex text-center text-3xl'><Link href=''>Стоматолог</Link></li>
          <li className='border-2 border-cyan-200 rounded-lg px-3 py-2 m-2 inline-flex text-center text-3xl'><Link href=''>Кардиолог</Link></li>
          <li className='border-2 border-cyan-200 rounded-lg px-3 py-2 m-2 inline-flex text-center text-3xl'><Link href=''>Гинеколог</Link></li>
        </ul>
      </div>
      Страница докторов
    </div>
  )
}
