import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';
const data=[
    {
        id:1,
        slug:'john',
        email:''},
        {
            id:2,
            slug:'other-user',
            email:''}
    ]

export async function GET(request,context) {
    const {params} = context
    const slug=params.slug[0].toString()
    try{
        const filePath = path.resolve('./src/app/api/main/surveys/data/survey.json');
        const db = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        const survey=db.survey.find((item)=>item.slug.toString()===slug)
        const user = data.find((item)=>item.slug.toString()===slug)
        return NextResponse.json({ survey})
    }
    catch(err){
        console.log(err);
        return new NextResponse({status:500,body:err})
    }
    
}
  