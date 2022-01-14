import '../styles/globals.css';
import { useState } from 'react';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/outline';

function MyApp({ Component, pageProps }) {
	const { lang, setLang } = useState('en-US');

	return (
		<>
			<Component lang={lang} {...pageProps} />
			<div className='absolute right-2 top-2'>
				<Link href='/'>
					<a>
						<HomeIcon className='w-8 h-8 text-gray-500' />
					</a>
				</Link>
			</div>
		</>
	);
}

export default MyApp;
