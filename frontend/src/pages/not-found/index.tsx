import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="font-bold text-9xl text-gray-300">404</h1>
        <h2 className="mt-4 font-semibold text-3xl">Page Not Found</h2>
        <p className="mt-2 mb-3 text-gray-600">Sorry, the page you're looking for doesn't exist.</p>
        <Button onClick={() => window.location.replace('/')}>Go Home</Button>
      </div>
    </div>
  );
}
