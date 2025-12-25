import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2Icon, Lock, Mail, User } from 'lucide-react';
import AuthLayout from '@/components/layouts/auth-layout';
import SocialLogin from '../login/components/social-login';
import { Button } from '@/components/ui/button';
import { ROUTE_PATH } from '@/constants';


const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export default function SignUpPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
    setIsLoading(true);
    try {
      console.log('Signup data:', data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Sign Up"
      subtitle="Create your account to start counting down."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          {/* Name Field */}
          <div className="relative flex flex-col gap-2">
            <label
              className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300"
              htmlFor="name"
            >
              Full Name
            </label>
            <div className="relative">
              <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                <User />
              </span>
              <input
                {...register('name')}
                className="h-12 w-full rounded-lg border border-solid border-gray-300 bg-gray-50 px-3 pl-10 text-sm font-normal leading-normal text-[#181111] transition-colors duration-200 ease-in-out placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[#382323] dark:text-white dark:placeholder:text-gray-500"
                id="name"
                placeholder="John Doe"
                type="text"
              />
            </div>
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="relative flex flex-col gap-2">
            <label
              className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                <Mail />
              </span>
              <input
                {...register('email')}
                className="h-12 w-full rounded-lg border border-solid border-gray-300 bg-gray-50 px-3 pl-10 text-sm font-normal leading-normal text-[#181111] transition-colors duration-200 ease-in-out placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[#382323] dark:text-white dark:placeholder:text-gray-500"
                id="email"
                placeholder="you@example.com"
                type="email"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative flex flex-col gap-2">
            <label
              className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                <Lock />  
              </span>
              <input
                {...register('password')}
                className="h-12 w-full rounded-lg border border-solid border-gray-300 bg-gray-50 px-3 pl-10 text-sm font-normal leading-normal text-[#181111] transition-colors duration-200 ease-in-out placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[#382323] dark:text-white dark:placeholder:text-gray-500"
                id="password"
                placeholder="••••••••"
                type="password"
              />
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="relative flex flex-col gap-2">
            <label
              className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="relative">
              <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                <Lock />
              </span>
              <input
                {...register('confirmPassword')}
                className="h-12 w-full rounded-lg border border-solid border-gray-300 bg-gray-50 px-3 pl-10 text-sm font-normal leading-normal text-[#181111] transition-colors duration-200 ease-in-out placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[#382323] dark:text-white dark:placeholder:text-gray-500"
                id="confirmPassword"
                placeholder="••••••••"
                type="password"
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-opacity duration-200 ease-in-out hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="truncate">Create Account</span>
          {isLoading && <Loader2Icon className="h-4 w-4 animate-spin" />}
        </Button>
      </form>

      {/* Social Login */}
      <SocialLogin />

      {/* Login Link */}
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?{' '}
        <Link to={ROUTE_PATH.AUTH.LOGIN} className="font-medium text-primary hover:underline">
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
}
