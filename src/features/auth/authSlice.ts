import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	quizToken: '',
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		getQuizToken(state, action) {
			state.quizToken = action.payload
		},
	},
})

export const { getQuizToken } = authSlice.actions
export default authSlice.reducer
