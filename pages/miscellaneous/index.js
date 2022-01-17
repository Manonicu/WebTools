import miscellaneousToolsConfig from '../../utils/config/miscellaneous';
import ListItem from '../../components/ListItems';

export default function ImageTools() {
	return (
		<div className='tools'>
			<h1 className='tools-item'>Miscellaneous Tools</h1>
			<ListItem data={miscellaneousToolsConfig} />
		</div>
	);
}
