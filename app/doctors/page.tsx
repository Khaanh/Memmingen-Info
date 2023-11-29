import Link from 'next/link'
import React from 'react'
import { promises as fs } from 'fs'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Список врачей"
}

async function getData() {
  const doctorsData = await fs.readFile(process.cwd() + '/app/assets/doctorsInfo.json', 'utf8');
  const doctorsInfo = await JSON.parse(doctorsData);
  return doctorsInfo
}

export default async function Doctors() {
  // const doctorsCategory = ['Стоматолог', 'Кардиолог', 'Гинеколог']
  const doctorsCategory = [
    {
      category: "zahnarzt",
      translate: "Стоматолог"
    },
    {
      category: "dermatologe",
      translate: "Дерматолог"
    },
    {
      category: "urologe",
      translate: "Уролог"
    },
    {
      category: "frauarzt",
      translate: "Гинеколог"
    },
    {
      category: "kardiologie",
      translate: "Кардиолог"
    },
    {
      category: "gastroenterologe",
      translate: "Гастроэнтеролог"
    },
    {
      category: "hno",
      translate: "ЛОР"
    },
  ]

  return (
    <div className='flex min-h-screen flex-col'>
      <div>
        <div className='hidden flex flex-wrap justify-center'>
          {
            doctorsCategory.map((category) => {
              return (
                <>
                  <div key={category.category} className='border-2 text-gray-900 border-cyan-200 rounded-lg px-3 py-2 m-2 inline-flex text-center text-3xl transition hover:-translate-y-0.5'>
                    <Link href={`doctors/${category.category}`} className='text-center'>{category.translate}</Link>
                  </div>
                </>
              )
            })
          }
        </div>
        <div>
          <h1 className='text-3xl md:text-5xl text-center text-gray-900 mb-5'>Извините за временные неудобства, страница временно недоступна в связи с обработкой данных</h1>
          {/* <h1 className='text-2xl md:text-3xl text-center text-gray-900 mr-3'>Если вам нужны контакты:
            <span className='italic text-gray-800'>
              стоматолога, дерматолога, уролога, гинеколога, гастроэнтеролога и ЛОРа - вы можете обратиться:
            </span>
            <br />
            <a href="https://t.me/Kh2nh" className='text-2xl break-all text-sky-600 font-medium underline decoration-indigo-500 hover:decoration-wavy'>telegram: https://t.me/Kh2nh</a>
          </h1> */}
        </div>
      </div>
    </div>
  )


  /** 
   * ! FOR CATEGORY PAGE DOES'NT WORK :(
   * ? FOR NEXT TIME.
  */

  // const doctorsCategory = [
  //   {
  //     category: 'zahnarzt',
  //     translate: 'Стоматолог'
  //   },
  //   {
  //     category: 'kardiologie',
  //     translate: 'Кардиолог'
  //   },
  //   {
  //     category: 'frauarzt',
  //     translate: 'Гинеколог'
  //   }
  // ]
  // return (
  //   <div className='flex min-h-screen flex-col'>
  //     <div>
  //       <ul className='flex flex-wrap justify-center'>
  //         {
  //           doctorsCategory.map((category) => {
  //             return (
  //               <li key={category} className='border-2 border-cyan-200 rounded-lg px-3 py-2 m-2 inline-flex text-center text-3xl'>
  //                 <Link href={`/doctors/${category}`}>{category}</Link>
  //               </li>
  //             )
  //           })
  //         }
  //       </ul>
  //     </div>
  //     Страница докторов
  //   </div>
  // )


}
