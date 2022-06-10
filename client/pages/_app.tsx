import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import '@/assets/styles/globals.scss';
import Layout from '@/components/layout/Layout';

function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default App;
