import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activeTool: 'all',
	subActiveTool: null,
	description: null,
	filterTools: [],
};

export const toolsSlice = createSlice({
	name: 'tools',
	initialState,
	reducers: {
		filterTool: (state, action) => {
			const tools = JSON.parse(localStorage.getItem('tools'));
			state.activeTool = action.payload;
			state.subActiveTool = null;
			state.filterTools =
				action.payload === 'all'
					? tools
					: tools.filter((item) => item.group === state.activeTool);
		},
		setSubActiveTool: (state, action) => {
			state.activeTool = action?.payload?.group;
			state.subActiveTool = action?.payload?.title;
			state.description = JSON.parse(localStorage.getItem('tools')).find(
				(item) => item.title === action?.payload?.title
			)?.description;
		},
		setFavorite: (state, action) => {
			console.log(state, action);
			const tools = JSON.parse(localStorage.getItem('tools'));
			const updateTools = tools.map((item) => {
				if (item.title === action.payload.title) {
					return {
						...item,
						isLike: !item.isLike,
					};
				}
				return item;
			});
			localStorage.setItem('tools', JSON.stringify(updateTools));

			filterTool(state.activeTool);
		},
	},
});

export const { filterTool, setSubActiveTool, setFavorite } = toolsSlice.actions;

export default toolsSlice.reducer;
