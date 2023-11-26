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
  ]

  return (
    <div className='flex min-h-screen flex-col'>
      <div>
        <div className='flex flex-wrap justify-center'>
          {
            doctorsCategory.map((category) => {
              return (
                <>
                  <div key={category.category} className='border-2 text-gray-900 border-cyan-200 rounded-lg px-3 py-2 m-2 inline-flex text-center text-3xl transition hover:-translate-y-1'>
                    <Link href={`doctors/${category.category}`} className='text-center'>{category.translate}</Link>
                  </div>
                </>
              )
            })
          }
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
