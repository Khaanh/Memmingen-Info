import React from 'react'
import Link from 'next/link';

export default function Navigation() {
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
    <ul className='flex justify-center mx-auto'>
      {
        navItems.map((link) => {
          return (
            <li key={link.label} className='mx-4 border-2 border-blue-700 rounded-md px-2 py-1'>
              <Link className='text-3xl' href={`/${link.href}`}> {link.label}</Link>
            </li>
          )
        })
      }
    </ul>
  )
}