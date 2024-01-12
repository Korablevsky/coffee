
'use server'

import { PrismaClient, productItem } from '@prisma/client'

const getProduct = async (slug: string) => {
 const prisma = new PrismaClient()
 const data = await prisma.productItem.findFirst({
  where: {
   slug: slug,
  },
 })
 return data
}

export { getProduct }