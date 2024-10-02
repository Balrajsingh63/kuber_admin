/** @format */

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	user: null,
	totleUser: 0,
};
export const userDataSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		setTotleUser: (state, action) => {
			state.totleUser = action.payload;
		},
	},
});

export const { setUser, setTotleUser } = userDataSlice.actions;
export default userDataSlice.reducer;
