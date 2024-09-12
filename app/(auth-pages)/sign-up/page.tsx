import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Signup({ searchParams }: { searchParams: Message }) {
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <form className="flex flex-col min-w-64 max-w-64 mx-auto">
        <h1 className="text-2xl font-medium">ثبت نام</h1>
        <p className="text-sm text text-foreground">
          آیا اکانت دارید؟{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            ورود
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">ایمیل</Label>
          <Input name="email" placeholder="ایمیل خود را وارد کنید" required />
          <Label htmlFor="password">پسوورد</Label>
          <Input
            type="password"
            name="password"
            placeholder="پسوورد خود را وارد کنید"
            minLength={6}
            required
          />
          <SubmitButton formAction={signUpAction} pendingText="درحال اجرای فرایند ثبت نام...">
            ثبت نام
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </>
  );
}
