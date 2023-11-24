import Link from 'next/link';
import React from 'react';
import Navigation from './Navigation';
import Image from 'next/image';
// import Doctorsdata from './assets/DoctorsData.json'

export default function HeaderPage() {
  return (
    <header className='flex flex-initial text-gray-950 mt-6 mb-14'>
      <div className="container flex-initial mx-auto px-4">
        <nav>
          <Link className='flex items-center justify-center mb-6' href='/'>
            <Image
              src="/logo-mm_Stadt-Memmingen.png"
              width={215}
              height={96}
              alt="logo Stadt Memmingen"
              unoptimized
            />
          </Link>
          <Navigation />
        </nav>
      </div>
    </header>
  )
}
