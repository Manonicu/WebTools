import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activeTool: 'all',
	subActiveTool: null,
	filterTools: [],
};

export const toolsSlice = createSlice({
	name: 'tools',
	initialState,
	reducers: {
		filterTool: (state, action) => {
			const tools = JSON.parse(localStorage.getItem('tools'));
			console.log(tools);
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
