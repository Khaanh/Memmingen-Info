'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

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
      label: "Экстренные номера"
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
    <ul className='flex flex-wrap justify-center mx-auto'>
      <button onClick={() => router.back()}>back</button>
      {
        navItems.map((link: Prop) => {
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
