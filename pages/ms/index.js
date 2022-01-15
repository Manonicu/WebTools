import { HeartIcon } from '@heroicons/react/outline';
import msToolsConfig from '../../utils/config/ms';
import Image from 'next/image';
import { ImgLoader } from '../../utils/customLoaders';
import ListItem from '../../components/ListItems';

export default function ImageTools() {
	return (
		<div className='tools'>
			<h1 className='tools-item'>Social Media Tools</h1>
			<ListItem data={msToolsConfig} />
		</div>
	);
}
