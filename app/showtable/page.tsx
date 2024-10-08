"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion'

const headers = ["name", "lastname", "gender", "age", "shiftTime", "weekTime", "city"];

const formatPersianNumber = (num: any) => {
    return num.toString().replace(/\d/g, (d: any) => '۰۱۲۳۴۵۶۷۸۹'[d]);
};

const ShowTable = () => {
    const [tableData, setTableData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/getdata");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setTableData(data.msg.data || []);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData(); // Fetch immediately on first render

        const interval = setInterval(() => {

            fetchData(); // Fetch every minute

        }, 60000); // 60000 milliseconds = 1 minute

        return () => clearInterval(interval); // Cleanup interval on unmount

    }, []);

    const pageAnimate = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    };

    return (
        <motion.div {...pageAnimate}>
            <h2 className="font-bold text-center text-[35px] mb-5">لیست متقاضیان براساس،نام،نام خانوادگی،جنسیت، سن،زمان شیفت ازاد در طول هفته و محل سکونت</h2>
            <div className="relative overflow-hidden shadow-md sm:rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-white uppercase dark:bg-[--purple-base] bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    نام
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    نام خانوادگی
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    جنسیت
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    سن
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    زمان شیفت آزاد
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    بازه زمانی هفته
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    محل سکونت
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.length > 0 ? (
                                tableData.map((dataItem, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        {headers.map((header) => (
                                            <td key={header} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {typeof dataItem[header] === 'number' ? formatPersianNumber(dataItem[header]) : dataItem[header]}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={headers.length} className="text-center py-4 font-bold">درحال دریافت اطلاعات...</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <Link href="/">
                    <Button className="w-full mt-5 mx-auto">
                        <span className="relative z-10 justify-self-center"> بازگشت به خانه</span>
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
};

export default ShowTable;
