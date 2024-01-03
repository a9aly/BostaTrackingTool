import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetchTodo", async (id) => {
  const url = "https://tracking.bosta.co/shipments/track/";
  const data = await fetch(url + id);
  return data.json();
});

const dataSlice = createSlice({
  name: "shipDetails",
  initialState: {
    isLoading: true,
    data: null,
    error: false,
    success: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.success = true;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.error = true;
    });
  },
});

/* export const { delivered, cancelled, delivered_to_sender } = dataSlice.actions;
 */ export default dataSlice.reducer;
