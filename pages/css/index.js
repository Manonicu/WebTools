import cssToolsConfig from '../../utils/config/css';
import ListItem from '../../components/ListItems';

export default function ImageTools() {
	return (
		<div className='tools'>
			<h1 className='tools-item'>CSS Tools</h1>
			<ListItem data={cssToolsConfig} />
		</div>
	);
}
