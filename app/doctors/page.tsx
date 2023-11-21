import Link from 'next/link'
import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Список врачей"
}

export default async function Doctors() {
  const doctorsCategory = ['Стоматолог', 'Кардиолог', 'Гинеколог']

  return (
    <div className='flex min-h-screen flex-col'>
      <div>
        <div className='flex flex-wrap justify-center'>
          {
            doctorsCategory.map((category) => {
              return (
                <>
                  <div key={category} className='border-2 border-cyan-200 rounded-lg px-3 py-2 m-2 inline-flex text-center text-3xl'>
                    <span>{category}</span>
                  </div>

                  <div className="tab-panel">

                  </div>
                </>
              )
            })
          }
        </div>
      </div>
      Страница докторов
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
