import Image from 'next/image';
import { ImgLoader } from '../utils/customLoaders';
import { HeartIcon } from '@heroicons/react/outline';

export default function ListItem(props) {
	return props.data.map(({ imageUrl, title, description }) => {
		return (
			<div className='tools-item' key={title}>
				<div className='tools-item-image'>
					<Image
						loader={ImgLoader}
						src={imageUrl}
						width={36}
						height={36}
						alt={title}
					/>
				</div>
				<div className='tools-item-title'>{title}</div>
				<div className='tools-item-description'>{description}</div>
				<div className='tools-item-like'>
					<HeartIcon className='icon' />
				</div>
			</div>
		);
	});
}
