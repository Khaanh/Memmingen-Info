import Link from 'next/link';
import React from 'react';
import Navigation from './Navigation';
// import Doctorsdata from './assets/DoctorsData.json'

export default function HeaderPage() {
  return (
    <header className='flex flex-initial text-gray-950 mt-6 mb-14'>
      <div className="container flex-initial mx-auto px-4">
        <nav>
          <Link className='flex items-center justify-center mb-6' href='/'>Logo</Link>
          <Navigation />
        </nav>
      </div>
    </header>
  )
}
