"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        <div className="table-container grid justify-center">
            <table className="border-separate">
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th className="px-3 py-2 text-xl bg-[--purple-base] text-white"
                                key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.length > 0 ?
                        tableData.map((dataItem, index) => (
                            <tr key={index}>
                                {headers.map((header) => (
                                    <td className="border-2 border-y-[--purple-base] border-x-1 px-3 py-2 text-xl" key={header}>{dataItem[header]}</td>
                                ))}
                            </tr>
                        )) : <div>
                            <div className="flex flex-row gap-2 absolute my-12">
                                <div className="w-4 h-4 rounded-full bg-[--purple-base] animate-bounce [animation-delay:.7s]" />
                                <div className="w-4 h-4 rounded-full bg-[--purple-base] animate-bounce [animation-delay:.3s]" />
                                <div className="w-4 h-4 rounded-full bg-[--purple-base] animate-bounce [animation-delay:.7s]" />
                            </div></div>}
                </tbody>
            </table>
            <Link href="/">
                <Button className="w-full mt-4 mx-4 mx-auto">
                    <span className="relative z-10 justify-self-center"> بازگشت به خانه</span>
                </Button>

            </Link>
        </div>
    );
};

export default ShowTable;