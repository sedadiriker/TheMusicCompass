import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: "",
  loading: false,
  error: false,
}
// console.log(initialState.user)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false
      state.user = payload
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false
      state.user = payload
    },
    logoutSuccess : (state) => {
      state.loading = false
      state.user = ""
    },
    fetchFail: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const { fetchStart, loginSuccess, fetchFail, registerSuccess,logoutSuccess } =
  authSlice.actions
export default authSlice.reducer
