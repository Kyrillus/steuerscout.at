import { NextResponse } from 'next/server';
import supabase from '@/supabase/utils/supabase';

export async function GET(request: Request
) {
    const {data} = await supabase.from('kanzlein').select();
    if (data == null) {
        return NextResponse.json({ data: data });
    }
    return NextResponse.json({ data: data });
}
