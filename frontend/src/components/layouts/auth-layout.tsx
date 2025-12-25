interface AuthLayoutProps {
    children: React.ReactNode
    title: string
    subtitle?: string
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="relative flex w-full flex-col items-center justify-center bg-background-light p-4 pt-10 dark:bg-background-dark text-[#211111] dark:text-background-light overflow-x-hidden">
      {/* Main Content */}
      <div className="w-full max-w-md">
        <div className="flex flex-col gap-8 rounded-xl bg-white p-8 shadow-sm dark:bg-[#2c1a1a] border border-black/5 dark:border-white/10">
          {/* Title Section */}
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-[#181111] dark:text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm font-normal leading-normal text-gray-600 dark:text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
          {/* Children (Form content) */}
          {children}
        </div>
      </div>
    </div>
  );
}