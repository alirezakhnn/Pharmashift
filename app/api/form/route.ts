import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const url = new URL(req.url);

    const formData = await req.formData();

    const name = String(formData.get('name'));
    const lastname = String(formData.get('lastname'));
    const gender = String(formData.get('gender'));
    const age = String(formData.get('age'));
    const shiftTime = String(formData.get('free_shift'));
    const weekTime = String(formData.get('week_range'));
    const city = String(formData.get('province'));

    await supabase
    .from('pharmashift_users')
    .insert({
        name,
        lastname,
        gender,
        age,
        shiftTime,
        weekTime,
        city
    })


    return NextResponse.redirect(`${url.origin}/`, {status: 302})
}