import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import * as Tools from 'tools';

const List = dynamic(() => import('components/home/List'));

export default function Home() {
	const activeTool = useSelector((state) => state.tools.activeTool);
	const subActiveTool = useSelector((state) => state.tools.subActiveTool);

	let LazyComponent = List;

	if (activeTool !== 'all' && subActiveTool) {
		const subTool = subActiveTool.split(' ').join('');
		LazyComponent = Tools[activeTool][subTool];
	}

	return <LazyComponent />;
}
