//libary or packages imports
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

//reducers  imports
import userSlice from "./sliceReducers/userSlice";
import moviesSlice from "./sliceReducers/movieSlice";
import userTabSlice from "./sliceReducers/userTabSlice";
import myListSlice from "./sliceReducers/myListSlice";

const reducer = combineReducers({
  userSlice: userSlice,
  moviesSlice: moviesSlice,
  userTab: userTabSlice,
  MyList: myListSlice,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
