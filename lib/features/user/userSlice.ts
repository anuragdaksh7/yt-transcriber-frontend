import { RootState } from "@/lib/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface UserState {
  user: any,
  access_token: string
}

const initialState: UserState = {
  user: null,
  access_token: ""
}

export const userSlice = createSlice({
  name: "user_slice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
    },
    removeUser: (state) => {
      state = initialState
    },
    updateUserOnly: (state, action) => {
      state.user = action.payload
    }
  }
})

export const { setUser, removeUser, updateUserOnly } = userSlice.actions

export const selectUser = (state: RootState) => state.user_slice

export default userSlice.reducer