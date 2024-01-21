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
    try{
        const filePath = path.resolve('./src/app/api/data/tutorials.json');
        const block = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        return NextResponse.json({ block})
    }
    catch(err){
        console.log(err);
        return new NextResponse({status:500,body:err})
    }
    
}
  