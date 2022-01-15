import colorToolsConfig from '../../utils/config/color';
import ListItem from '../../components/ListItems';

export default function ImageTools() {
	return (
		<div className='tools'>
			<h1 className='tools-item'>Color Tools</h1>
			<ListItem data={colorToolsConfig} />
		</div>
	);
}
