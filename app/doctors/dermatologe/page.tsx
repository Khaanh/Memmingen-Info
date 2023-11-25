import React from 'react'
import { promises as fs } from 'fs'
import Image from 'next/image';

/**
 * 22/11/23
 * ! replace right type for doc: any !
 * {doctorsInfo.map((doc: any) => { 
 */
/**
 * 22/11/23
 * TODO Add messengers: whatsApp e.t.c 
 *  
 */

/**
 * it should be improved by:
 * const extraSigns = ["+", " ", "", "-", "/", "(", ")"];
 */

// function check, put in order & call href="tel:"
const handleTel = (telStr: string) => {
  const telStrArr = telStr.split("");
  const telNumbArr: string[] = [];

  telStrArr.forEach((item) => {
    if (
      item !== "+" &&
      item !== " " &&
      item !== "-" &&
      item !== "/" &&
      item !== "(" &&
      item !== ")"
    ) {
      telNumbArr.push(item)
    }
  });

  // Check number for +49
  if (telNumbArr[0] == "4" && telNumbArr[1] == "9") {
    return telNumbArr.slice(2, telNumbArr.length).join("").trim();
  } else {
    return telNumbArr.join("").trim();
  }
}

async function Dermatologe() {
  const doctorsData = await fs.readFile(process.cwd() + '/app/assets/category/dermatologe.json', 'utf8');
  const doctorsInfo = JSON.parse(doctorsData);

  return (
    <div className='grid lg:grid-cols-2 gap-4'>
      {doctorsInfo.map((doc: any) => {
        return (
          <div key={doc.name} className='border-2 rounded overflow-hidden border-cyan-400'>
            <div className='mb-2 h-80 overflow-hidden bg-cover bg-no-repeat' style={{ backgroundImage: `url(${doc.picture})` }}></div>

            <div className='px-3'>
              <h3 className='flex items-end mb-1'>
                <strong className='flex text-2xl text-gray-900 mr-3'>Имя: </strong>
                <p className='text-2xl text-gray-800'>
                  {doc.name ? doc.name : 'Информация временно отсутствует'}
                </p>
              </h3>
              <h3 className='flex items-end mb-2'>
                <strong className='flex text-2xl text-gray-900 mr-3'>Город: </strong>
                <p className='text-2xl text-gray-800'>
                  {doc.city ? doc.city : 'Информация временно отсутствует'}
                </p>
              </h3>
              <h3 className='flex items-end mb-2'>
                <strong className='flex text-2xl text-gray-900 mr-3'>Телефон: </strong>
                <a href={`tel:+49${handleTel(`${doc.tel}`)}`} className='text-2xl text-gray-800 underline decoration-blue-700 hover:decoration-blue-400 hover:decoration-wavy'>
                  {doc.tel ? doc.tel : 'Информация временно отсутствует'}
                </a>
              </h3>
              <h3 className='flex items-end mb-2'>
                <strong className='flex text-2xl text-gray-900 mr-3'>Адрес: </strong>
                <p className='text-2xl text-gray-800'>
                  {doc.address ? doc.address : 'Информация временно отсутствует'}
                </p>
              </h3>
              <h3 className='flex items-end mb-2'>
                <strong className='flex text-2xl text-gray-900 mr-3'>На карте: </strong>
                <a href={`${doc.google}` ? `${doc.google}` : "#"} target='_blank' className='text-2xl text-gray-800 underline decoration-blue-700 hover:decoration-blue-400 hover:decoration-wavy'>
                  {doc.google !== "" ? doc.address : 'Информация временно отсутствует'}
                </a>
              </h3>
              <h3 className='flex items-end mb-2'>
                <strong className='flex text-2xl text-gray-900 mr-3'>Веб-сайт: </strong>
                <a href={`${doc.website}`} target='_blank' className='text-2xl text-gray-800 underline decoration-blue-700 hover:decoration-blue-400 hover:decoration-wavy'>
                  {doc.website ? doc.website : 'Информация временно отсутствует'}
                </a>
              </h3>
              <h3 className='flex items-end mb-2'>
                <strong className='flex text-2xl text-gray-900 mr-3'>Комментарий: </strong>
                <p className='text-2xl text-gray-800 italic'>
                  {doc.comments.length == 0 ? 'Пусто' : doc.comments}
                </p>
              </h3>
            </div>
          </div>
        )
      })}
    </div >
  )
}

export default Dermatologe