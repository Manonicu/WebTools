import { AnimateSharedLayout, motion } from 'framer-motion';
import { titles } from '../../utils/tools';
import { useEffect } from 'react';

const Filter = ({ activeTool, setActiveTool, setFiltered, all }) => {
	useEffect(() => {
		if (activeTool === 0) {
			setFiltered(all);
			return false;
		}
		const filtered = all.filter((item) => item.group === titles[activeTool]);
		setFiltered(filtered);
	}, [activeTool]);

	return (
		<AnimateSharedLayout>
			<motion.div layout className='home-tab'>
				{titles.map((item, key) => {
					const isActive = activeTool === key;
					return (
						<div
							key={key}
							className='home-tab-item'
							onClick={() => setActiveTool(key)}
						>
							<div className='home-tab-item-text'>{item}</div>
							{isActive && (
								<motion.div
									layoutId='home-tab-item-active'
									className='home-tab-item-active'
									initial={false}
									animate
									transition={{
										type: 'spring',
										stiffness: 500,
										damping: 30,
									}}
								/>
							)}
						</div>
					);
				})}
			</motion.div>
		</AnimateSharedLayout>
	);
};

export default Filter;
