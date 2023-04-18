import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: "idle",
  exerciseData: [],
  bodyPartsList: [],
  error: null,
};

export const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Key': '4a454fbf70msh0f3c8689d9e935fp12bee9jsne73d84e4fbff',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
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
      // console.log(data);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
      console.error(error);
    }
  }
);

export const fetchBodyPartsList = createAsyncThunk(
  "fetch/bodypartslist",
  async (url, thunkApi) => {
    try {
      const response = await axios.get(url, options);
      console.log(response.data);
      return response.data;
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
      })
      .addCase(fetchBodyPartsList.pending, (state) => {
        state.loading = "loading";
        state.error = "";
      })
      .addCase(fetchBodyPartsList.fulfilled, (state, action) => {
        state.loading = "succeded";
        state.bodyPartsList = action.payload;
      })
      .addCase(fetchBodyPartsList.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      });
  },
});

export default exerciseSlice.reducer;
