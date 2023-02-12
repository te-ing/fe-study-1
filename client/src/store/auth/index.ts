import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

const name = "auth";

type stateType = {
  userInfo: { email: string };
};

const initialState: stateType = {
  userInfo: { email: "" },
};

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    clearAuthState: () => initialState,
    setUserInfo: (state, action: PayloadAction<{ email: string }>) => {
      state.userInfo.email = action.payload.email;
    },
  },
});
export const { setUserInfo } = authSlice.actions;
export const userInfos = (state: RootState) => state.authSlice.userInfo;

export default authSlice.reducer;
