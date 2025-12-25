import { Button } from "@/components/ui/button";

export default function SocialLogin() {
  const handleGoogleLogin = () => {
    // Handle Google login
    console.log('Google login');
  };

  return (
    <>
      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="h-px grow bg-gray-200 dark:bg-gray-700" />
        <p className="text-xs font-normal leading-none text-gray-500 dark:text-gray-400">
          OR CONTINUE WITH
        </p>
        <div className="h-px grow bg-gray-200 dark:bg-gray-700" />
      </div>

      {/* Social Buttons */}
      <div className="grid grid-cols-1 gap-4">
        {/* Google Button */}
        <Button
          type="button"
          onClick={handleGoogleLogin}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-4 bg-white text-gray-700 text-sm font-medium leading-normal tracking-[0.015em] border border-gray-300 transition-colors duration-200 ease-in-out hover:bg-gray-100 dark:bg-[#382323] dark:text-gray-300 dark:border-gray-700 dark:hover:bg-[#452d2d]"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.578 12.285c0-.82-.07-1.62-.205-2.393H12.24v4.51h5.81c-.25 1.458-1.003 2.7-2.14 3.55v2.92h3.75c2.19-2.01 3.45-5.01 3.45-8.587Z"
              fill="#4285F4"
            />
            <path
              d="M12.24 23c3.24 0 5.95-1.08 7.93-2.91l-3.75-2.92c-1.08.72-2.45 1.16-4.18 1.16-3.21 0-5.92-2.16-6.9-5.08H1.5v3.01C3.47 20.44 7.54 23 12.24 23Z"
              fill="#34A853"
            />
            <path
              d="M5.34 14.11c-.24-.72-.37-1.49-.37-2.28s.13-1.56.37-2.28V6.54H1.5C.56 8.44 0 10.45 0 12.56s.56 4.12 1.5 6.02l3.84-2.47Z"
              fill="#FBBC05"
            />
            <path
              d="M12.24 4.88c1.75 0 3.32.6 4.56 1.79l3.32-3.32C18.18 1.46 15.47 0 12.24 0 7.54 0 3.47 2.56 1.5 6.54l3.84 3.01c.98-2.92 3.69-5.08 6.9-5.08Z"
              fill="#EA4335"
            />
          </svg>
          <span className="truncate">Google</span>
        </Button>
      </div>
    </>
  );
}