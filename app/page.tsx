"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion"

export default function Index() {
  
  const textAnimate = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const btnAnimate = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  };
  return (
    <main className="grid sm:grid-cols-1 sm:place-items-center md:grid-cols-2 gap-x-6">
      <motion.div {...textAnimate}>
        <Image className="object-cover rounded-md"
          src="/undraw_medicine_b-1-ol.svg"
          alt="" width={500} height={300}
        />
      </motion.div>
      <div className="grid gap-y-3 w-4/3 px-2">
        <motion.h1 {...textAnimate} className="text-[45px] font-bold xxs:text-center md:text-right">دستیار هوشمند تبادل شیفت داروسازان!</motion.h1>
        <motion.p {...textAnimate} className="xxs:text-center md:text-right">به فارماشیفت، اولین سامانه تبادل شیفت مسئولین فنی داروساز، خوش آمدید.</motion.p>
        <motion.div {...btnAnimate} className="xxs:grid md:flex gap-4 mt-4">
          <Button><Link href="/signform">ثبت نام داروسازان</Link></Button>
          <Button variant="outline"><Link href="/showtable">متقاضیان تبادل شیفت</Link></Button>
        </motion.div>
      </div>
    </main>
  );
}
