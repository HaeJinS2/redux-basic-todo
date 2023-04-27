import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import React from "react";

const initialState = {
  todos : [],
  isLoading : false,
  isError: false,
  error: null,
}

export const __getTodos = createAsyncThunk(
  "getTodos",
  async (payload,thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:4000/todos')
      console.log("response: ",response.data)
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("error: ",error)
      return thunkAPI.rejectWithValue(error);
    }

  }
)
const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__getTodos.fulfilled]: (state, action) => {
      console.log(action)
      state.isLoading = false;
      state.isError = false;
      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload
    }
  }
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;