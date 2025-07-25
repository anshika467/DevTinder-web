import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionsReducer from "./ConnectionSlice";
import requestReducer from "./RequestSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: connectionsReducer,
    requests: requestReducer,
  },
});

export default appStore;
