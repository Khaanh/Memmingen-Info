import React from 'react'

export default function FooterPage() {
  return (
    <footer className='flex flex-initial py-6 bg-gray-800'>
      <div className="container px-2 lg:px-4 flex-initial mx-auto text-gray-100 bg-gray-800">
        <div className='flex flex-col'>
          <p className='mb-3'>
            С вопросами, исправлениями и новыми идеями обращаться:
          </p>
          <a href="https://t.me/Kh2nh" className='mb-1 break-all text-sky-400 font-medium underline decoration-indigo-500 hover:decoration-wavy'>Telegram: Khanh (Хань)</a>
          <i className='mb-1'>или</i>
          <a href="mailto:khanh13nguyen13@gmail.com" className='break-all text-sky-400 font-medium underline decoration-indigo-500 hover:decoration-wavy'>Email: khanh13nguyen13@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}
