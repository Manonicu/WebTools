import { createSlice } from '@reduxjs/toolkit';
import tools from 'utils/tools';

const initialState = {
	activeTool: 'all',
	subActiveTool: null,
	filterTools: tools,
};

export const toolsSlice = createSlice({
	name: 'tools',
	initialState,
	reducers: {
		filterTool: (state, action) => {
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

		},
	},
});

export const { filterTool, setSubActiveTool, setFavorite } = toolsSlice.actions;

export default toolsSlice.reducer;
