import type { NextApiRequest, NextApiResponse } from 'next'
// import { prisma } from '../../server/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  // const value = await prisma.note.findFirst({where: {id: 'save'}})
  // res.status(201).send(value?.content || 'None')
  res.status(201).send('None')
}
