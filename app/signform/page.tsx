"use client";

import { useState } from "react";
import Link from "next/link";

const SignForm = () => {
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

    const formHandler: any = (e: React.FormEvent<HTMLFormElement>) => {
        const inputElement = e.target as HTMLInputElement;
        const name = inputElement.name;
        const value = inputElement.value;
        setGetter((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <form action="/api/form" method="post" className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                <div className="max-w-md mx-auto">
                    <div className="mt-5">
                        <div className="flex justify-between gap-3">
                            <div>
                                <label
                                    className="font-semibold text-sm text-gray-600 pb-1 block"
                                    htmlFor="name"
                                >
                                    نام
                                </label>
                                <input
                                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
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
                                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
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
                                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
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
                                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
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
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
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
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
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
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                            type="text"
                            id="city"
                            name="city"
                            onChange={formHandler}
                            value={getter.city}
                            required
                        />
                    </div>
                    <div className="mt-5">
                        <button className="relative flex font-bold rounded-lg h-[50px] w-[100%] items-center justify-center overflow-hidden bg-blue-600 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
                            <span className="relative z-10">ثبت تقاضا</span>
                        </button>

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

    );
};


export default SignForm;
