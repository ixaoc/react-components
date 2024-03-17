import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState: any = {
	list: []
}

const slice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
  	list: (state, action: PayloadAction<{page?: number}>) => {},
  
  	listSuccess: (state, { payload }: PayloadAction<any[]>) => {
  		state.list = payload
  	}
  },
})

export const actions = slice.actions
export default slice.reducer
