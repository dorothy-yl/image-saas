import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    return NextResponse.json({ a: id });
}