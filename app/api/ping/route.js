import { NextResponse } from "next/server";
import  {connectDb } from '../../../utils/mongooseConn'

 export function GET(){
   connectDb()
    return NextResponse.json({
        message: "hello world"
    })
}