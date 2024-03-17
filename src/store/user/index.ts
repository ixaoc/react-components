import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState: any = {
	access_token: '',
	refresh_token: '',
  request: false
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  	login: (state, action: PayloadAction<{username: string, password: string}>) => {
      state.request = true
    },
  	logout: (state) => { console.log('logout')
  		state.access_token = ''
  		state.refresh_token = ''
  	},

  	changeAccessToken: (state, { payload }: PayloadAction<string>) => {
  		state.access_token = payload
  	},

  	loginSuccess: (state, { payload: { 
  		access_token,
  		refresh_token
  	}}: PayloadAction<{access_token: string, refresh_token: string}>) => {
  		state.access_token = access_token
  		state.refresh_token = refresh_token
      state.request = false
  	}
  },
})

export const actions = slice.actions
export default slice.reducer
