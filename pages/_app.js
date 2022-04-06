import { useEffect, useState } from 'react';
import 'styles/globals.scss';
import { AnimatePresence } from 'framer-motion';
import { store } from 'store';
import { Provider } from 'react-redux';
import Layout from 'components/Layout';

function MyApp({ Component, pageProps, router }) {
	const [isFirstMount, setIsFirstMount] = useState(true);

	useEffect(() => {
		const handleRouteChange = () => {
			isFirstMount && setIsFirstMount(false);
		};

		router.events.on('routeChangeStart', handleRouteChange);

		return () => {
			router.events.off('routeChangeStart', handleRouteChange);
		};
	}, []);

	return (
		<Provider store={store}>
			<Layout>
				<AnimatePresence exitBeforeEnter>
					<Component
						isFirstMount={isFirstMount}
						key={router.route}
						{...pageProps}
					/>
				</AnimatePresence>
			</Layout>
		</Provider>
	);
}

export default MyApp;
