import imageToolsConfig from '../../utils/config/image';
import ListItem from '../../components/ListItems';

export default function ImageTools() {
	return (
		<div className='tools'>
			<h1 className='tools-item'>Image Tools</h1>
			<ListItem data={imageToolsConfig} />
		</div>
	);
}
