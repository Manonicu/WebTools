import { useSelector, useDispatch } from 'react-redux';
import { filterTool } from 'store/toolsSlice';
import dynamic from 'next/dynamic';
import * as Tools from 'tools';
import { useEffect } from 'react';

const List = dynamic(() => import('components/home/List'));

export default function Home() {
	const activeTool = useSelector((state) => state.tools.activeTool);
	const subActiveTool = useSelector((state) => state.tools.subActiveTool);

	const dispatch = useDispatch();

	let LazyComponent = List;

	if (activeTool !== 'all' && subActiveTool) {
		const subTool = subActiveTool.split(' ').join('');
		LazyComponent = Tools[activeTool][subTool];
	}

	useEffect(() => {
		dispatch(filterTool('all'));
	}, []);

	return <LazyComponent />;
}
