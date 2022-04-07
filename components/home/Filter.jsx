import { motion } from 'framer-motion';
import { titles } from 'utils/tools';
import { useSelector, useDispatch } from 'react-redux';
import { filterTool } from 'store/toolsSlice';

const Filter = () => {
	const dispatch = useDispatch();

	const activeTool = useSelector((state) => state?.tools?.activeTool || 'all');

	return (
		<div className='home-tab'>
			{titles.map((item) => {
				const isActive = activeTool === item;
				return (
					<div
						key={item}
						className='home-tab-item'
						onClick={() => dispatch(filterTool(item))}
					>
						<span>{item}</span>
						{isActive && (
							<motion.div
								layoutId='home-tab-item-active'
								className='home-tab-item-active'
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
		</div>
	);
};

export default Filter;
