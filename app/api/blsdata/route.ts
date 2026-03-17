import { NextResponse } from 'next/server';
import GetData from '@/app/lib/getdata';

export async function GET() {
    const data = await GetData();
    return NextResponse.json(data);
}