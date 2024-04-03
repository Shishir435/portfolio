import { PortAuth } from "@/app/models/portAuth.models"
import { connect } from "@/lib/mongodb"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    connect()
    const body = await req.json()
    if (!body.username || !body.password) {
      return NextResponse.json(
        {
          error: "Invalid post body",
          isAuthenticated: false,
        },
        { status: 400 }
      )
    }
    const admin = await PortAuth.find({ username: body.username })
    if (admin.length == 0 || admin[0].password !== body.password) {
      return NextResponse.json(
        {
          error: "Unauthorased",
          isAuthenticated: false,
        },
        { status: 403 }
      )
    }
    return NextResponse.json(
      {
        message: "Authenticated",
        isAuthenticated: true,
      },
      { status: 200 }
    )
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
        isAuthenticated: false,
      },
      { status: 400 }
    )
  }
}
