import { HeartIcon } from '@heroicons/react/outline';
import miscellaneousToolsConfig from '../../utils/config/miscellaneous';
import { ImgLoader } from '../../utils/customLoaders';
import Image from 'next/image';

export default function ImageTools() {
	return (
		<div className='tools'>
			<h1 className='tools-item'>Miscellaneous Tools</h1>
			{miscellaneousToolsConfig.map((item) => {
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
