import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;

const initialState = {
  isLoading: false,
  reviews: [],
};

export const addReview = createAsyncThunk(
  "/order/addReview",
  async (formdata, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${SERVER_URL}/api/shop/review/add`,
        formdata
      );
      return response.data;
    } catch (error) {
      console.error(
        "Error in addReview:",
        error.response?.data || error.message
      );
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getReviews = createAsyncThunk("/order/getReviews", async (id) => {
  const response = await axios.get(`${SERVER_URL}/api/shop/review/${id}`);

  return response.data;
});

const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload.data;
      })
      .addCase(getReviews.rejected, (state) => {
        state.isLoading = false;
        state.reviews = [];
      });
  },
});

export default reviewSlice.reducer;
