import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="w-full grid xxs:grid-cols-1 md:grid-cols-2 xxs:gap-y-6 md:gap-x-16">
      <h3 className="text-xl font-bold xxs:text-center md:text-right">
        به پنل کاربری خود خوش آمدید
      </h3>
      <div className="grid gap-y-5 place-items-center">
        <h3 className="font-bold text-lg text-center">اطلاعات کاربری شما</h3>
        <p>{user.email}</p>
      </div>
      <div className="flex gap-5 justify-center">
        <Button><Link href="/signform">ثبت نام داروسازان</Link></Button>
        <Button variant="outline"><Link href="/showtable">متقاضیان تبادل شیفت</Link></Button>
      </div>
      <Image src="/undraw_medical_care_movn.svg" alt="" width={500} height={300} />
    </div>
  );
}
