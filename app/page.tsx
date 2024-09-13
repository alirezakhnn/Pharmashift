import { Button } from "@/components/ui/button";
import { MessageBoxIcon } from "@/components/ui/icons";
import Image from "next/image";
import Link from "next/link";

export default async function Index() {
  return (
    <main className="grid sm:grid-cols-1 sm:place-items-center md:grid-cols-2 gap-x-6">
      <div>
        <Image className="object-cover rounded-md"
          src="/undraw_medicine_b-1-ol.svg"
          alt="" width={500} height={300}
        />
      </div>
      <div className="grid gap-y-3 w-4/3 px-2">
        <h1 className="text-[45px] font-bold xxs:text-center md:text-right">دستیار هوشمند تبادل شیفت داروسازان!</h1>
        <p className="xxs:text-center md:text-right">به فارماشیفت، اولین سامانه تبادل شیفت مسئولین فنی داروساز، خوش آمدید.</p>
        <div className="xxs:grid md:flex gap-4 mt-4">
          <Button><Link href="/signform">ثبت نام داروسازان</Link></Button>
          <Button variant="outline"><Link href="/showtable">متقاضیان تبادل شیفت</Link></Button>
        </div>
      </div>
      <MessageBoxIcon />
    </main>
  );
}
