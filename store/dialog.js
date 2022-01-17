import { createSlice } from '@reduxjs/toolkit';

export const dialogState = createSlice({
	name: 'dialog',
	initialState: {
		visible: false,
		data: {},
		lang: 'en-US',
	},
	reducers: {
		hide: (state) => {
			state.visible = false;
			state.data = {};
		},
		show: (state, action) => {
			state.visible = true;
			state.data = action.payload;
		},
	},
});

export const { hide, show } = dialogState.actions;

export default dialogState.reducer;
