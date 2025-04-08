import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex-1 flex flex-col w-full max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Sign in</h1>
      <p className="text-sm text-foreground mb-6">
        Don't have an account?{" "}
        <Link className="text-foreground font-medium underline" href="/sign-up">
          Sign up
        </Link>
      </p>

      {/* Google Sign-in Button */}
      <button
        type="button"
        className="flex items-center justify-center gap-2 w-full bg-white text-gray-800 border border-gray-300 rounded-md py-3 px-4 mb-6 hover:bg-gray-50 transition-colors"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <g transform="matrix(1, 0, 0, 1, 0, 0)">
            <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5.22,16.25 5.22,12.27C5.22,8.29 8.36,5.27 12.19,5.27C15.68,5.27 17.16,7.13 17.16,7.13L19.07,5.1C19.07,5.1 16.9,2.7 12.19,2.7C6.92,2.7 2.5,7.06 2.5,12.27C2.5,17.48 6.92,21.84 12.19,21.84C17.09,21.84 21.28,18.3 21.28,12.44C21.28,11.78 21.35,11.1 21.35,11.1Z" fill="#4285F4" />
            <path d="M7.15,13.83V10.14H3.81V13.83H7.15Z" fill="#34A853" />
            <path d="M3.81,10.14V13.83H7.15C7.15,12.46 6.13,11.48 4.98,11.48C4.41,11.48 3.9,11.73 3.53,12.13L3.81,10.14Z" fill="#FBBC05" />
            <path d="M11.91,8.56V5.27H7.15V8.56H11.91Z" fill="#EA4335" />
            <path d="M7.15,8.56V5.27H3.81V8.56H7.15Z" fill="#C5221F" />
          </g>
        </svg>
        Sign in with Google
      </button>

      {/* Divider */}
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-background text-gray-500">or continue with email</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base">Email</Label>
          <Input 
            name="email" 
            id="email"
            placeholder="you@example.com" 
            required 
            className="h-12 text-base px-4"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="password" className="text-base">Password</Label>
            <Link className="text-sm text-foreground underline" href="/forgot-password">
              Forgot Password?
            </Link>
          </div>
          <Input 
            type="password" 
            name="password"
            id="password" 
            placeholder="Your password" 
            required 
            className="h-12 text-base px-4"
          />
        </div>

        <SubmitButton 
          pendingText="Signing In..." 
          formAction={signInAction}
          className="h-12 text-base mt-2"
        >
          Sign in
        </SubmitButton>
        
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}