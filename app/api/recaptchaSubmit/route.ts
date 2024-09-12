import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const postData = await request.json();
    const { gRecaptchaToken } = postData;
    let res;

    const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

    try {
        res = await axios.post(
            "https://www/google.com//recaptcha/api/siteverify",
            formData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
    } catch (e) {
        return NextResponse.json({ success: false })
    }

    if (res && res.data?.success && res.data.score > 0.5) {
        console.log("res.data?.score: ", res.data?.score);
        return NextResponse.json({
            success: true,
            score: res.data.score
        })
    } else {
        return NextResponse.json({ success: false });
    }

}