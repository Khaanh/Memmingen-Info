import { log } from 'console';
import { promises as fs } from 'fs'
import Image from 'next/image';

type Prop = {
  title: string,
  tel: string,
  email1?: [],
  email2?: [],
  website?: string,
  descr: string,
  img: string
}
export default async function Page() {
  const emergencyCalls = await fs.readFile(process.cwd() + '/public/assets/emergency/emergency.json', 'utf8');
  const emergencyInfo = JSON.parse(emergencyCalls);

  console.log(emergencyInfo)

  const handleMobile = (strTel: string) => {
    const arrTel = strTel.split('');
    const numberTel: string[] = [];

    arrTel.forEach((item) => {
      if (item !== '-' && item !== " ") {
        numberTel.push(item)
      }
    })

    return numberTel.join("")
  }

  /**
   *26 / 11 / 23 
   * TODO: Must be improved !!!
   */
  // const handleMail = (emailArr: any) => {
  //   const email = emailArr;
  //   return email
  // }

  return (
    <div>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8'>
        {emergencyInfo.map((info: Prop) => {
          return (
            <li key={info.title} className='p-2 sm:p-4 border border-gray-300 rounded-lg transition shadow hover:border-gray-600'>
              <Image
                src={`/img/${info.img}`}
                width={128}
                height={128}
                alt={`${info.descr}`}
                className='mb-6'
              />

              <h1 className='text-2xl font-semibold mb-2'>{info.title}</h1>

              {
                info.tel ? (
                  <a href={`tel:${handleMobile(info.tel)}`} className='block text-3xl sm:text-4xl mb-10 font-semibold text-red-500 underline  decoration-sky-500  hover:decoration-wavy'>Набрать: {info.tel}</a>
                ) : (
                  null
                )
              }
              {
                info.email1 ? (
                  <>
                    <a href={`mailto:${info.email1}`} target='_blank' className='block text-2xl text-sky-600 font-medium underline decoration-indigo-500 hover:decoration-wavy mb-4'>{info.email1}</a>
                    <a href={`mailto:${info.email2}`} target='_blank' className='block text-2xl text-sky-600 font-medium underline decoration-indigo-500 hover:decoration-wavy mb-10 break-words ...'>{info.email2}</a>
                  </>
                ) : (
                  null
                )
              }

              {
                info.website ? (
                  <a href={info.website} target='_blank' className='block text-2xl text-sky-600 font-medium underline decoration-indigo-500 hover:decoration-wavy mb-10 break-words ...' >{info.website}</a>
                ) : (null)
              }

              <p className='text-2xl'>{info.descr}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
