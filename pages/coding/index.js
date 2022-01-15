import codingToolsConfig from '../../utils/config/coding';
import ListItem from '../../components/ListItems';

export default function ImageTools() {
	return (
		<div className='tools'>
			<h1 className='tools-item'>Coding Tools</h1>
			<ListItem data={codingToolsConfig} />
		</div>
	);
}
