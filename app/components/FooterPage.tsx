import React from 'react'

export default function FooterPage() {
  return (
    <footer className='flex flex-initial py-6 bg-gray-800'>
      <div className="container px-3 lg:px-4 flex-initial mx-auto text-gray-100 bg-gray-800">
        <div className='flex flex-col mb-2'>
          <p className='mb-3'>
            С вопросами и предложениями по улучшению проекта - обращайтесь:
          </p>
          <a href="https://t.me/Kh2nh" className='mb-1 break-all text-sky-400 font-medium underline decoration-indigo-500 hover:decoration-wavy'>Telegram: Khanh (Хань)</a>
          <i className='mb-1'>или</i>
          <a href="mailto:khanh13nguyen13@gmail.com" className='break-all text-sky-400 font-medium underline decoration-indigo-500 hover:decoration-wavy'>Email: khanh13nguyen13@gmail.com</a>
        </div>
        <div className='flex justify-center text-gray-600	text-sm'>
          Copyright © 2023. All rights reserved
        </div>
      </div>
    </footer>
  )
}
