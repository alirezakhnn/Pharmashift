"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const headers = ["name", "lastname", "gender", "age", "shiftTime", "weekTime", "city"];

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

        fetchData();
    }, []);

    return (
        <div className="table-container grid justify-center my-20">
            <table className="border-separate">
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th className="px-3 py-2 text-xl bg-blue-400"
                                key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.length > 0 ?
                        tableData.map((dataItem, index) => (
                            <tr key={index}>
                                {headers.map((header) => (
                                    <td className="border-2 border-y-blue-400 border-x-1 px-3 py-2 text-xl" key={header}>{dataItem[header]}</td>
                                ))}
                            </tr>
                        )) : <div>
                            <div className="flex flex-row gap-2 absolute top-[30%] right-[50%]">
                                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
                                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]" />
                                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
                            </div></div>}
                </tbody>
            </table>
            <Link href="/">
                <button className="relative flex font-bold h-[50px] w-[100%] items-center justify-center overflow-hidden bg-blue-600 my-3 rounded-lg text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
                    <span className="relative z-10 justify-self-center"> بازگشت به خانه</span>
                </button>

            </Link>
        </div>
    );
};

export default ShowTable;