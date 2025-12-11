import Header from '../header';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header />
      <main className="flex flex-grow flex-col overflow-hidden px-4 py-4">{children}</main>
      {/* <footer className="mt-6 bg-white shadow">
        <div className="container mx-auto px-4 py-2 text-center font-bold text-sm">
          {APP_NAME} v{APP_VERSION}
        </div>
      </footer> */}
    </div>
  );
}
