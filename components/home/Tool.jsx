import { motion } from 'framer-motion';
import { Image } from '@chakra-ui/react';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

const Tool = ({ tool, setCur }) => {
	const { imageUrl, title, description, isLike, group, component } = tool;

	return (
		<motion.div
			className='home-tools-item'
			onClick={() => setCur({group,component})}
			layout
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
		>
			<div className='tool-inner'>
				<div className='tool-logo'>
					<Image
						src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/${imageUrl}`}
						alt={title}
					/>
				</div>
				<div className='tool-title'>{title}</div>
				<div className='tool-desc'>{description}</div>

				<MdOutlineFavoriteBorder
					onClick={() => console.log('like')}
					className={`absolute right-4 bottom-4 text-gray-500 ${
						isLike && 'text-red-500'
					}`}
				/>
			</div>
		</motion.div>
	);
};

export default Tool;
