import {createSlice} from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
    player_type: null, // ✅ add this
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    // setUser: (state, action) => {
    //   state.user = action.payload;
    // },
    // setPlayerType: (state, action) => {
    //   state.player_type = action.payload;
    // },
    clearAuth: (state)=>{
        // state.user = null;
        state.token = null;
    }
  },
});

export const {setToken, clearAuth } = authReducer.actions;

export default authReducer.reducer;
