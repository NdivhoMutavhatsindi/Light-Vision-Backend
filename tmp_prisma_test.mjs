import dotenv from 'dotenv';
dotenv.config();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

(async ()=>{
  try{
    const p = await prisma.property.findMany();
    console.log('OK', p.length);
  }catch(e){
    console.error(e);
  }finally{
    await prisma.$disconnect();
  }
})();
