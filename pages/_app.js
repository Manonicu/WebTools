import '../styles/globals.scss';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/outline';
import store from '../store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
			<div className='absolute right-2 top-2'>
				<Link href='/'>
					<a>
						<HomeIcon className='w-8 h-8 text-gray-500' />
					</a>
				</Link>
			</div>
		</Provider>
	);
}

export default MyApp;
