import { useEffect, useState, useRef } from 'react';
import Filter from 'components/home/Filter';
import { motion, AnimatePresence } from 'framer-motion';
import Tool from '../components/home/Tool';

export default function Home() {
	const [all, setAll] = useState([]);
	const [filtered, setFiltered] = useState([]);
	const [activeTool, setActiveTool] = useState(0);
	const [cur, setCur] = useState(null);
	const [loaded, setLoaded] = useState(false);
	const LazyComponent = useRef(null);

	useEffect(() => {
		import('utils/tools').then((res) => {
			setAll(res.default);
			setFiltered(res.default);
		});
	}, []);

	useEffect(() => {
		const { group, component } = cur || {};

		if (group && component) {
			import(`components/${group}/${component}`).then((res) => {
				LazyComponent.current = res.default;
				setLoaded(true);
				console.log(LazyComponent);
			});
		}
	}, [cur]);

	return (
		<div className='home'>
			<h1 className='home-title'>All in one</h1>
			<Filter
				all={all}
				setFiltered={setFiltered}
				activeTool={activeTool}
				setActiveTool={setActiveTool}
			/>
			<motion.div className='home-tools'>
				<AnimatePresence>
					{filtered.map((item, key) => {
						return <Tool key={key} tool={item} setCur={setCur} />;
					})}
					{loaded && (
						<motion.div className='current-tool'>
							<LazyComponent.current />
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</div>
	);
}
