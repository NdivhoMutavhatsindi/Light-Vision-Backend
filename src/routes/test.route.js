import prisma from "../config/database.js"

async function test() {
  const result = await prisma.$queryRaw`SELECT NOW()`
  console.log(result)
}

test()