import App from '@/App';
import { GlobalModalProvider } from '@/components/global-modal';
import { Toaster } from '@/components/ui/sonner';
import i18n from '@/translation/i18n';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import './index.css';

// // Add material icons stylesheet
// const materialIconsLink = document.createElement('link');
// materialIconsLink.href = 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined';
// materialIconsLink.rel = 'stylesheet';
// document.head.appendChild(materialIconsLink);

// // Add Font
// const fontLink = document.createElement('link');
// fontLink.href =
//   'https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&family=Noto+Sans+JP:wght@100..900&display=swap';
// fontLink.rel = 'stylesheet';
// document.head.appendChild(fontLink);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

// @ts-ignore
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <GlobalModalProvider>
          <App />
          {/* <div className={cn('fixed inset-0 z-50 flex items-center justify-center bg-black/50')}>
            <Loader2 className="h-12 w-12 animate-spin text-white" />
          </div> */}
          <Toaster richColors />
          <ReactQueryDevtools initialIsOpen={false} />
        </GlobalModalProvider>
      </I18nextProvider>
    </QueryClientProvider>
  </StrictMode>,
);
