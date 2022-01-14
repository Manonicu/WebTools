import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/outline';
import miscellaneousToolsConfig from '../../utils/config/miscellaneous';

export default function ImageTools() {
	return (
		<div className='p-8 w-screen image-tools'>
			<h1 className='text-center text-4xl mb-8 font-bold'>
				Miscellaneous Tools
			</h1>
			<div className='grid grid-cols-3 gap-4'>
				{miscellaneousToolsConfig.map((item) => {
					return (
						<div
							className='cursor-pointer rounded-xl shadow-xl shadow-indigo-200 bg-white p-4 tool'
							key={item.title}
						>
							<div className='tool-icon'>
								<Image
									src={item.imageUrl}
									width={42}
									height={42}
									alt={item.title}
								/>
							</div>
							<div className='tool-title font-bold text-gray-900 my-2.5'>
								{item.title}
							</div>
							<div className='tool-description text-xs text-gray-500 leading-normal'>
								{item.description}
							</div>
							<div className='flex justify-end mt-2.5'>
								<HeartIcon className='w-6 h-6 text-gray-400' />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
