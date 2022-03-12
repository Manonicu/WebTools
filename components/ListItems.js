import Image from 'next/image';
import { ImgLoader } from '../utils/customLoaders';
import { HeartIcon } from '@heroicons/react/outline';
import { show } from '../store/dialog';
import { useDispatch } from 'react-redux';

export default function ListItem(props) {
	const dispatch = useDispatch();

	return (
		<>
			{props.data.map((item) => {
				return (
					<div
						className='tools-item'
						key={item.title}
						onClick={() => dispatch(show(item))}
					>
						<div className='tools-item-image'>
							<Image
								loader={ImgLoader}
								src={item.imageUrl}
								width={36}
								height={36}
								alt={item.title}
							/>
						</div>
						<div className='tools-item-title'>{item.title}</div>
						<div className='tools-item-description'>{item.description}</div>
						<div className='tools-item-like'>
							<HeartIcon className='icon' />
						</div>
					</div>
				);
			})}
		</>
	);
}
