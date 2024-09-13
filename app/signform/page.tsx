"use client";

import { useState } from "react";
import Link from "next/link";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SignForm = () => {


    const { executeRecaptcha }: any = useGoogleReCaptcha;

    const [getter, setGetter] = useState<{
        name: string,
        lastname: string
        gender: string
        age: string
        shiftTime: string
        weekTime: string
        city: string
    }>({
        name: '',
        lastname: '',
        gender: '',
        age: '',
        shiftTime: '',
        weekTime: '',
        city: ''
    })

    const [submit, setSubmit] = useState("")

    const formHandler: any = async (e: React.FormEvent<HTMLFormElement>) => {

        const inputElement = e.target as HTMLInputElement;
        const name = inputElement.name;
        const value = inputElement.value;
        setGetter((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    }

    const submitHandler = async () => {
        if (!executeRecaptcha) {
            console.log("recapthca not available!")
            return;
        }
        const gRecaptchaToken = await executeRecaptcha('inquirySubmit');

        const response = await axios({
            method: "post",
            url: '/api/recaptchaSubmit',
            data: {
                gRecaptchaToken
            },
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
        });

        if (response?.data?.success === true) {
            console.log(`Success with score: ${response?.data?.score}`);
            setSubmit("ReCaptcha verified and Form Submitted!")
        } else {
            console.log(`Failure with score: ${response?.data?.score}`);
            setSubmit("Failed to verify recaptch! You must be a robot!")
        }

    }

    return (
        <div className="grid sm:grid-cols-1 sm:gap-y-16 md:grid-cols-2 gap-x-8 items-center">
            <form action="/api/form" method="post" className="relative py-3 sm:max-w-xl sm:mx-auto" onSubmit={submitHandler}>
                <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-sm shadow-[--purple-base] rounded-3xl sm:p-10">
                    <div className="max-w-md mx-auto">
                        <div className="mt-5">
                            <div className="flex justify-between gap-3"> <div>
                                <label
                                    className="font-semibold text-sm text-gray-600 pb-1 block"
                                    htmlFor="name"
                                >
                                    نام
                                </label>
                                <input
                                    className="border border-[--purple-base] rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-white"
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={formHandler}
                                    value={getter.name}
                                    required
                                />
                            </div>
                                <div>
                                    <label
                                        className="font-semibold text-sm text-gray-600 pb-1 block"
                                        htmlFor="lastname"
                                    >
                                        نام خانوادگی
                                    </label>
                                    <input
                                        className="border border-[--purple-base] rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-white"
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        onChange={formHandler}
                                        value={getter.lastname}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between gap-3">
                                <div>
                                    <label
                                        className="font-semibold text-sm text-gray-600 pb-1 block"
                                        htmlFor="gender"
                                    >
                                        جنسیت
                                    </label>
                                    <input
                                        className="border border-[--purple-base] rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-white"
                                        name="gender"
                                        type="text"
                                        id="gender"
                                        onChange={formHandler}
                                        value={getter.gender}
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        className="font-semibold text-sm text-gray-600 pb-1 block"
                                        htmlFor="age"
                                    >
                                        سن
                                    </label>
                                    <input
                                        className="border border-[--purple-base] rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-white"
                                        type="number"
                                        id="age"
                                        name="age"
                                        onChange={formHandler}
                                        value={getter.age}
                                        required
                                    />
                                </div>
                            </div>
                            <label
                                className="font-semibold text-sm text-gray-600 pb-1 block"
                                htmlFor="shiftTime"
                            >
                                شیفت ازاد
                            </label>
                            <input
                                className="border border-[--purple-base] rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-white"
                                type="text"
                                id="shiftTime"
                                name="shiftTime"
                                onChange={formHandler}
                                value={getter.shiftTime}
                                required
                            />
                            <label
                                className="font-semibold text-sm text-gray-600 pb-1 block"
                                htmlFor="weekTime"
                            >
                                روز های هفته
                            </label>
                            <input
                                className="border border-[--purple-base] rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-white"
                                type="text"
                                id="weekTime"
                                name="weekTime"
                                onChange={formHandler}
                                value={getter.weekTime}
                                required
                            />
                            <label
                                className="font-semibold text-sm text-gray-600 pb-1 block"
                                htmlFor="city"
                            >
                                شهر
                            </label>
                            <input
                                className="border border-[--purple-base] rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-white"
                                type="text"
                                id="city"
                                name="city"
                                onChange={formHandler}
                                value={getter.city}
                                required
                            />
                        </div>
                        <div className="mt-5">
                            <Button variant="default" className="text-white w-full">
                                <span className="relative z-10">ثبت تقاضا</span>
                            </Button>

                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
                            <Link
                                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                                href="/"
                            >
                                خروج
                            </Link>
                            <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4" />
                        </div>
                    </div>
                </div>
            </form>
            <Image src="/undraw_doctors_p6aq.svg" width={500} height={300} alt="doctors_picture" />
        </div>
    );
};


export default SignForm;
