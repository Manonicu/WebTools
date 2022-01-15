import { HeartIcon } from '@heroicons/react/outline';
import codingToolsConfig from '../../utils/config/coding';
import Image from 'next/image';
import { ImgLoader } from '../../utils/customLoaders';

export default function ImageTools() {
	return (
		<div className='tools'>
			<h1 className='tools-item'>Coding Tools</h1>
			{codingToolsConfig.map((item) => {
				return (
					<div className='tools-item' key={item.title}>
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
		</div>
	);
}
