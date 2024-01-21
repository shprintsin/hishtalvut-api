// import {Prisma,PrismaClient} from "@prisma/client"
// const {NextResponse} = require("next/server")
// const prisma = new PrismaClient()
// export const GET = async()=>{
//     try{
//         const categories = await prisma.tutorial.findMany()
//         return new NextResponse(
//             JSON.stringify(categories,{status:200}),
//         )
//     }
//     catch(err){
//         console.log(err);
//     return new NextResponse({status:500,body:err})
//     }
// }