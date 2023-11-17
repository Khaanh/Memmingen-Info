import Link from 'next/link';
import React from 'react';
// import Doctorsdata from './assets/DoctorsData.json'

export default function HeaderPage() {
  return (
    <header className='text-gray-950'>
      <div className="container">
        <div className="logo">
          <Link href='/'>Logo</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href='/doctors'>Доктора</Link>
              <Link href='/sos'>SOS</Link>
              <Link href='/documents'>Документы</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
