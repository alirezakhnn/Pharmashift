import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const res = await supabase
    .from('pharmashift_users')
    .select("*")
    .order("age", {ascending: true})


    return NextResponse.json({ msg:res, status:200 })

}