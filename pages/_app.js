import { useEffect } from 'react';
import 'styles/globals.scss';
import { AnimatePresence } from 'framer-motion';
import { store } from 'store';
import { Provider } from 'react-redux';
import Layout from 'components/Layout';
import { tools } from 'utils/tools'

function MyApp({ Component, pageProps, router }) {

	useEffect(() => {
		localStorage.setItem('tools',JSON.stringify(tools));
	}, []);

	return (
		<Provider store={store}>
			<Layout>
				<AnimatePresence exitBeforeEnter>
					<Component key={router.route} {...pageProps} />
				</AnimatePresence>
			</Layout>
		</Provider>
	);
}

export default MyApp;
