import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    success: true,
    message: 'hie!',
    data: {
      message: 'Message and email sent successfully!',
    }
  }, { status: 200 });
};