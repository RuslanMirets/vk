import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import '@/assets/styles/globals.scss';
import Layout from '@/components/layout/Layout';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</QueryClientProvider>
	);
}

export default App;
