import '../styles/globals.css';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
	const { lang, setLang } = useState('en-US');

	return <Component lang={lang} {...pageProps} />;
}

export default MyApp;
