import React from 'react'

const linkGroups = [
  {
    href: "https://t.me/+SvJO-CAYnH04MTgx",
    label: "LINGVO волонтери. Безкоштовнi переклади"
  },
  {
    href: "https://bit.ly/lingvoaudio",
    label: "AUDIO LINGVO волонтеры"
  }
]
export default function Page() {
  return (
    <div className='sm:h-[80vh]'>
      <h1 className='text-2xl mb-4 sm:text-4xl font-bold sm:mb-10'>Телеграм-группы для поиска переводчиков:  </h1>
      <ul>
        {
          linkGroups.map((link, index) => {
            return (
              <li key={link.href} className='flex mb-4'>
                <a href={`${link.href}`} className='text-1xl sm:text-2xl break-all text-sky-600 font-medium underline decoration-indigo-500 hover:decoration-wavy'>{link.label}</a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
