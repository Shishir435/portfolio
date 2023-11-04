import { ContactMessage } from "@/app/models/message.models";
import { connect } from "@/lib/mongodb";
import { AxiosRequestConfig } from "axios";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function POST(request: NextRequest){
    try {
        const reqBody= await request.json();

        const {name, email, message}= reqBody;
    //    console.log(name,email,message)
        const newContactMessage= new ContactMessage({
            name,
            email,
            message
        })
       const savedmessage= await newContactMessage.save();
    //    console.log(savedmessage);
        return NextResponse.json({
            message: "user messag saved successfully",
            success: true,
            newContactMessage
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}



export async function GET(request: NextRequest){
   
    const searchTpye=request.nextUrl.searchParams.get('fetchType')
    // console.dir(search);
    // console.log(searchTpye);

    try {
        
        if(searchTpye==="all"){
            const resp= await ContactMessage.find({})
            return NextResponse.json({
                message: "data fetching success full",
                resp
            })
        }else if(searchTpye==="unresolved"){

            const resp= await ContactMessage.find({resolve: false})
            return NextResponse.json({
                message: "data fetching success full",
                resp
            })
        }
        else if(searchTpye==="resolved"){

            const resp= await ContactMessage.find({resolve: true})
            return NextResponse.json({
                message: "data fetching success full",
                resp
            })
        }
        
    } catch (error:any) {
        return NextResponse.json({
            error: error.message
        }, {status: 400})
    }

}

export async function PATCH(request:NextRequest){
    try {
        const req= await request.json();
        const {id, resolveValue}:{id:string, resolveValue:boolean}=req;
        const resp= await ContactMessage.findByIdAndUpdate({_id: id },{
            resolve: resolveValue
        })

        return NextResponse.json({
            message: "successfully updated",
            resp
        })
    } catch (error: any) {
        console.log("something wen wrong while updating",error);
        return NextResponse.json({
            error: error.message
        },{status: 500})
    }
}