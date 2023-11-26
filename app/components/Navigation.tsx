'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const pathName = usePathname();
  const router = useRouter()

  const navItems = [
    {
      href: "doctors",
      label: "Врачи"
    },
    {
      href: "emergency",
      label: "Экстренный вызов"
    }, {
      href: "documents",
      label: "Документы"
    }
  ]

  type Prop = {
    href: string,
    label: string
  }

  return (
    <ul className='flex flex-wrap items-center justify-center mx-auto'>
      <button className='flex items-center border-2 border-blue-500  rounded-md px-2 hover:bg-blue-500 transition text-black hover:text-white hover:-translate-x-2 sm:mr-4' onClick={() => router.back()}>
        <ArrowSmallLeftIcon className='h-8 w-8' />
        <span className='text-1xl'>назад</span>
      </button>
      {
        navItems.map((link: Prop) => {
          return (
            <li key={link.label} className='m-2'>
              <Link
                href={`/${link.href}`}
                className={`flex text-3xl text-center border-2 border-blue-700 rounded-md px-3 py-2 transition hover:-translate-y-1 ${pathName === "/" + link.href ? 'link-active' : ''} `}>
                {link.label}
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}
