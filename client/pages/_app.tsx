import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import '../app/assets/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default App;
