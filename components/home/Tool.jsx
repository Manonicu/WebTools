import { motion } from 'framer-motion';
import Image from 'components/Image';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { setSubActiveTool, setFavorite } from 'store/toolsSlice';
import { useDispatch } from 'react-redux';

const Tool = ({ tool }) => {
	const dispatch = useDispatch();

	const { imageUrl, title, description, isLike, group, draft } = tool;

	const handleClick = (tool) => {
		!draft && dispatch(setSubActiveTool(tool));
	};

	return (
		<motion.div
			className={`home-tools-item ${draft && 'cursor-not-allowed grayscale'}`}
			whileHover={{
				position: 'relative',
				translateY: '-5%',
			}}
		>
			<div onClick={() => handleClick(tool)}>
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
