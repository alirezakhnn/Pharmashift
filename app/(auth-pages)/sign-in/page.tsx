import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login({ searchParams }: { searchParams: Message }) {
  return (
    <form className="flex-1 flex flex-col min-w-64">
      <h1 className="text-2xl font-medium">ورود</h1>
      <p className="text-sm text-foreground">
        آیا اکانت دارید؟{" "}
        <Link className="text-foreground font-medium underline" href="/sign-up">
          ثبت نام
        </Link>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">ایمیل</Label>
        <Input name="email" placeholder="ایمیل خود را وارد کنید" required />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">پسوورد</Label>
          <Link
            className="text-xs text-foreground underline"
            href="/forgot-password"
          >
            پسوورد خود را فراموش کردید؟
          </Link>
        </div>
        <Input
          type="password"
          name="password"
          placeholder="پسوورد خود را وارد کنید"
          required
        />
        <SubmitButton pendingText="درحال انجام فرایند ورود..." formAction={signInAction}>
          ورود
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
