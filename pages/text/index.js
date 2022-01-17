import textToolsConfig from '../../utils/config/text';
import ListItem from '../../components/ListItems';

export default function ImageTools() {
	return (
		<div className='tools'>
			<h1 className='tools-item'>Text Tools</h1>
			<ListItem data={textToolsConfig} />
		</div>
	);
}
