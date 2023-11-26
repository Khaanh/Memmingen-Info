import { promises as fs } from 'fs'
import Image from 'next/image';

type Prop = {
  title: string,
  tel: string,
  email?: [],
  website?: string,
  descr: string,
  img: string
}
export default async function Page() {
  const emergencyCalls = await fs.readFile(process.cwd() + '/public/assets/emergency/emergency.json', 'utf8');
  const emergencyInfo = JSON.parse(emergencyCalls);

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

  return (
    <div>
      <ul className='grid lg:grid-cols-3 gap-4 gap-y-8'>
        {emergencyInfo.map((info: Prop) => {
          return (
            <li key={info.title} className='px-4 py-4 border border-gray-300 rounded-lg transition shadow hover:border-gray-600'>
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
                  <a href={`tel:${handleMobile(info.tel)}`} className='block mb-4 text-4xl font-semibold text-red-500 underline  decoration-sky-500  hover:decoration-wavy'>Набрать: {info.tel}</a>
                ) : (
                  null
                )
              }
              {/* {
                <p>{info.email}</p>
              } */}
              <p className='text-2xl '>{info.descr}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
