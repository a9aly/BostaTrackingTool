import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "./fetchSlice";
export default configureStore({
  reducer: { data: dataSliceReducer },
});
