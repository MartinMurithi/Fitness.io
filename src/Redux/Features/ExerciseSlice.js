import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: "idle",
  exerciseData: [],
  error: null,
};

export const options = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": "6c9f998980mshacd2139f7d952f8p187e70jsnb7861c3cfd84",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchApiData = createAsyncThunk(
  "fetch/exercises",
  async (url, thunkApi) => {
    try {
      const response = await axios.get(url, options);
      let data = [];
      let keys = Object.keys(response.data);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        data.push({ ...response.data[key], id: key });
      }
      //   console.log(data);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
      console.error(error);
    }
  }
);
const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData.pending, (state) => {
        state.loading = "loading";
        state.error = "";
      })
      .addCase(fetchApiData.fulfilled, (state, action) => {
        state.loading = "succeded";
        state.exerciseData = action.payload;
      })
      .addCase(fetchApiData.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      });
  },
});

export default exerciseSlice.reducer;
