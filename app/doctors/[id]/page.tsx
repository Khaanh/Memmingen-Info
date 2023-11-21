import React from 'react'
import { promises as fs } from 'fs'
import { Metadata } from 'next';

/**
 * ! FOR CATEGORY PAGE DOES'NT WORK :(
 * ? FOR NEXT TIME.
*/

async function getData() {
  const doctorsData = await fs.readFile(process.cwd() + '/app/assets/doctorsInfo.json', 'utf8');
  const doctorsInfo = await JSON.parse(doctorsData);
  return doctorsInfo
}

type Props = {
  category: string,
}

// export async function generateMetadata({ params: { category }, }: Props): Promise<Metadata> {

//   return {
//     title: category
//   }
// }


export default async function Specialist() {
  return (
    <>
      <h1>Category page</h1>
    </>
  )
}
