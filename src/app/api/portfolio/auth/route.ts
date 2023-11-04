import { PortAuth } from "@/app/models/portAuth.models";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest) {
    try {
        const resp = await PortAuth.find({})
        return NextResponse.json({
            message: "datafetch successfull",
            resp
        })
    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({
            error: error.message
        }, { status: 400 })

    }

}