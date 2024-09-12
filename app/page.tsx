import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Index() {
  return (
    <>
      <main className="grid grid-cols-2 gap-x-6 z-[-10]">
        <div>
          <Image src="" alt="" fill />
        </div>
        <div className="grid gap-y-3 w-4/3">
          <h1 className="text-[45px] font-bold">دستیار هوشمند تبادل شیفت داروسازان!</h1>
          <p>به فارماشیفت، اولین سامانه تبادل شیفت مسئولین فنی داروساز، خوش آمدید.</p>
          <div className="flex gap-4 mt-4">
            <Button>ثبت نام داروسازان</Button>
            <Button>متقاضیان تبادل شیفت</Button>
          </div>
        </div>
      </main>
    </>
  );
}
