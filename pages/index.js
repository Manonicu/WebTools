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
					<h1 className='text-2xl mb-6 font-semibold'>{subActiveTool}</h1>
					<div className='description mb-6 px-4 py-8 border-l-2 border-l-[#e9e9ed] bg-[#e9e9ed] rounded'>
						{description}
					</div>
					<LazyComponent />
				</div>
			) : (
				<List />
			)}
		</>
	);
}
