import { motion } from 'framer-motion';
import Image from 'components/Image';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { setSubActiveTool, setFavorite } from 'store/toolsSlice';
import { useDispatch } from 'react-redux';

const Tool = ({ tool }) => {
	const dispatch = useDispatch();

	const { imageUrl, title, description, isLike, group } = tool;

	return (
		<motion.div
			className='home-tools-item'
			whileHover={{
				position: 'relative',
				zIndex: 1,
				scale: 1.05,
				transition: {
					type: 'spring',
					stiffness: 500,
					damping: 30,
				},
			}}
		>
			<div onClick={() => dispatch(setSubActiveTool({ group, title }))}>
				<div className='tool-logo'>
					<Image
						src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/${imageUrl}`}
						alt={title}
						width={40}
						height={40}
						loading='lazy'
					/>
				</div>
				<div className='tool-title'>{title}</div>
				<div className='tool-desc'>{description}</div>
			</div>

			<div className='flex justify-end tool-footer'>
				<MdOutlineFavoriteBorder
					onClick={() => dispatch(setFavorite({ group, title }))}
					className={`text-gray-500 ${isLike && 'text-red-500'}`}
				/>
			</div>
		</motion.div>
	);
};

export default Tool;
