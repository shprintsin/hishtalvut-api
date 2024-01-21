// import {Prisma,PrismaClient} from "@prisma/client"
import fs from 'fs';
import path from 'path';
const {NextResponse} = require("next/server")
// const prisma = new PrismaClient()

export const GET = async()=>{
    try{
        const filePath = path.resolve('./src/app/api/main/surveys/data/survey.json');

        const infodata = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        return new NextResponse(
            JSON.stringify(infodata,{status:200}),
        )
    }
    catch(err){
        console.log(err);
        return new NextResponse({status:500,body:err})
    }
}
