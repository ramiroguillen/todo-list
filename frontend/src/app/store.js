import { configureStore } from "@reduxjs/toolkit";
import { tasksApi } from "../features/tasks/services/tasksApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
});

setupListeners(store.dispatch);
