import Tool from './Tool';
import { useSelector } from 'react-redux';

const List = () => {
	const filtered = useSelector((state) => state.tools.filterTools);

	return (
		<div className='home-tools'>
			{filtered.map((item, key) => {
				return <Tool key={key} idx={key} tool={item} />;
			})}
		</div>
	);
};

export default List;
