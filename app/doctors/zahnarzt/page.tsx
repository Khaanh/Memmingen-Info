import React from 'react'
import { promises as fs } from 'fs'



async function Zahnarzt() {
  const doctorsData = await fs.readFile(process.cwd() + '/app/assets/category/zahnarzt.json', 'utf8');
  const doctorsInfo = JSON.parse(doctorsData);

  console.log('doctorsInfo', doctorsInfo)

  return (
    <div className='flex w-full'>
      {doctorsInfo.map((doc) => {
        return (
          <div key={doc.name} className='mx-3 w-1/3'>
            <div>
              <img src="/" alt="picture" />
            </div>

            <div>
              <h3 className='flex items-end'>
                <strong className='flex text-3xl text-gray-900 mr-3'>Имя: </strong>
                <p className='text-2xl text-gray-800'>
                  {doc.name ? doc.name : 'Информация отсутствует'}
                </p>
              </h3>
              <h3 className='flex items-end'>
                <strong className='flex text-3xl text-gray-900 mr-3'>Город: </strong>
                <p className='text-2xl text-gray-800'>
                  {doc.city ? doc.city : 'Информация отсутствует'}
                </p>
              </h3>
              <h3 className='flex items-end'>
                <strong className='flex text-3xl text-gray-900 mr-3'>Телефон: </strong>
                <a href="" className='text-2xl text-gray-800 underline decoration-blue-700 hover:decoration-blue-500'>
                  {doc.tel ? doc.tel : 'Информация отсутствует'}
                </a>
              </h3>
              <h3 className='flex items-end'>
                <strong className='flex text-3xl text-gray-900 mr-3'>Адрес: </strong>
                <a href="" className='text-2xl text-gray-800 underline decoration-blue-700 hover:decoration-blue-500'>
                  {doc.address ? doc.address : 'Информация отсутствует'}
                </a>
              </h3>
              <h3 className='flex items-end'>
                <strong className='flex text-3xl text-gray-900 mr-3'>Веб-сайт: </strong>
                <a href={`${doc.website}`} className='text-2xl text-gray-800 underline decoration-blue-700 hover:decoration-blue-500'>
                  {doc.website ? doc.website : 'Информация отсутствует'}
                </a>
              </h3>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Zahnarzt