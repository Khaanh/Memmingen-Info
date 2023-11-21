import React from 'react'
import { promises as fs } from 'fs'
import { Metadata } from 'next';

async function getData() {
  const doctorsData = await fs.readFile(process.cwd() + '/app/assets/doctorsInfo.json', 'utf8');
  const doctorsInfo = await JSON.parse(doctorsData);
  return doctorsInfo
}

type Props = {
  category: string,
}

export async function generateMetadata({ params: { category }, }: Props): Promise<Metadata> {

  return {
    title: category
  }
}


export default async function Specialist({ params: { category }, }: Props) {
  const doctorsList = await getData();
  const zahnarztArr = doctorsList.filter(item => item.category === 'zahnarzt')

  console.log('category:', category)
  console.log('doctorsList:', doctorsList)
  console.log('zahnarztArr:', zahnarztArr)

  return (
    <>
      {
        zahnarztArr.map((item) => {
          return (
            <div>
              <p>{item.name}</p>
              <p>{item.city}</p>
              <p>{item.tel}</p>
            </div>
          )
        })
      }
    </>
  )
}
