import { forgotPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function ForgotPassword({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <>
      <form className="flex-1 flex flex-col w-full gap-2 text-foreground [&>input]:mb-6 min-w-64 max-w-64 mx-auto">
        <div>
          <h1 className="text-2xl font-medium">ریست کردن پسورد</h1>
          <p className="text-sm text-secondary-foreground mt-3">
            آیا اکانت دارید؟{" "}
            <Link className="text-primary underline" href="/sign-in">
            ورود
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">ایمیل</Label>
          <Input name="email" placeholder="ایمیل خود را وارد کنید" required />
          <SubmitButton formAction={forgotPasswordAction} pendingText="درحال انجام فرایند...">
            ریست کردن پسوورد
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </>
  );
}
