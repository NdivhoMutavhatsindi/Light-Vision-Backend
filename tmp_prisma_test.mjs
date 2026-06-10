import dotenv from 'dotenv';
dotenv.config();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

(async ()=>{
  try{
    const offers = await prisma.offer.findMany({ take: 1 });
    console.log('offer rows:', offers.length);
    const properties = await prisma.property.findMany({ take: 1 });
    console.log('property rows:', properties.length);
  }catch(e){
    console.error(e);
  }finally{
    await prisma.$disconnect();
  }
})();
