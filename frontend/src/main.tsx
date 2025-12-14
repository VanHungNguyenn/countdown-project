import App from '@/App'
import { GlobalModalProvider } from '@/components/global-modal'
import { Toaster } from '@/components/ui/sonner'
import i18n from '@/translation/i18n'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import './index.css'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: true,
		},
	},
})

// @ts-ignore
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<I18nextProvider i18n={i18n}>
				<GlobalModalProvider>
					<App />
					<Toaster richColors />
					<ReactQueryDevtools initialIsOpen={false} />
				</GlobalModalProvider>
			</I18nextProvider>
		</QueryClientProvider>
	</StrictMode>
)
