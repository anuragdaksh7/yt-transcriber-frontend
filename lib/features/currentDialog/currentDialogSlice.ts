import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store"

export interface CurrentDialogState {
  currentPage: string;
}

const initialState: CurrentDialogState = {
  currentPage: "LINK_SELECTION"
}

export const currentDialogSlice = createSlice({
  name: "current_dialog_slice",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload
    },
  }
})

export const { setCurrentPage } = currentDialogSlice.actions

export const selectCurrentDialogPage = (state: RootState) => state.currentDialog.currentPage

export default currentDialogSlice.reducer
