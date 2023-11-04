// import { PortAuth } from "@/app/models/portAuth.models";

import { PortAuth } from "@/app/models/portAuth.models";
import { connect } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request:NextRequest) {
    try {
        console.log("inside auth")
        const resp = await PortAuth.find({});
        return NextResponse.json({
            message: "data fetch successfull",
            resp
        })
    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({
            error: error.message
        }, { status: 400 })

    }
}