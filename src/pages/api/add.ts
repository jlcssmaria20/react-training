import { prisma } from '@server/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const content = 'New note 6'

  await prisma.note.upsert({
    where: {
      id: 'save',
    },
    create: {
      id: 'save',
      content,
    },
    update: {
      content,
    },
  })
  res.status(201).send(content)
}
