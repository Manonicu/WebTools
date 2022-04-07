import { useSelector, useDispatch } from 'react-redux';
import { filterTool } from 'store/toolsSlice';
import dynamic from 'next/dynamic';
import * as ToolsComponent from 'tools';
import { useEffect } from 'react';

const List = dynamic(() => import('components/home/List'));

export default function Home() {
	const activeTool = useSelector((state) => state.tools.activeTool);
	const subActiveTool = useSelector((state) => state.tools.subActiveTool);
	const description = useSelector((state) => state.tools.description);
	const dispatch = useDispatch();

	let LazyComponent = null;

	if (activeTool !== 'all' && subActiveTool) {
		const subTool = subActiveTool.split(' ').join('');
		console.log(activeTool,subTool)
		LazyComponent = ToolsComponent[activeTool][subTool];
	}
	// https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/tools.json
	useEffect(() => {
		dispatch(filterTool('all'));
		console.log(ToolsComponent)
	}, []);

	return (
		<>
			{activeTool !== 'all' && subActiveTool ? (
				<div className='tool-header'>
					<hgroup className='text-base mb-4'>
						<h1 className='capitalize'>{`${activeTool} - ${subActiveTool}`}</h1>
						<p className='text-sm text-gray-500'>{description}</p>
					</hgroup>

					<LazyComponent />
				</div>
			) : (
				<List />
			)}
		</>
	);
}
