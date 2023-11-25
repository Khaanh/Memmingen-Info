'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathName = usePathname();

  const navItems = [
    {
      href: "doctors",
      label: "Врачи"
    },
    {
      href: "emergency",
      label: "Экстренные номера"
    }, {
      href: "documents",
      label: "Документы"
    }
  ]

  return (
    <ul className='flex flex-wrap justify-center mx-auto'>
      {
        navItems.map((link) => {
          return (
            <li key={link.label} className='mx-4 my-2'>
              <Link
                href={`/${link.href}`}
                className={`flex text-3xl text-center border-2 border-blue-700 rounded-md px-3 py-2 ${pathName === "/" + link.href ? 'link-active' : ''} `}>
                {link.label}
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}
