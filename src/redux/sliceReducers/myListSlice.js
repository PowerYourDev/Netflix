import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, onSnapshot, getDoc } from "firebase/firestore"; // Assuming you're using Firebase Firestore

// Assuming you have initialized your Firebase Firestore database
import { db } from "../../utilis/firebase";

export const fetchMyListData = createAsyncThunk(
  "myList/fetchMyListData",
  async (userData, thunkAPI) => {
    try {
      if (userData) {
        const docRef = doc(db, "users", userData.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          return docSnap.data().myListItem;
        } else {
          return null;
        }
      } else {
        return null;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const myListSlice = createSlice({
  name: "myList",
  initialState: {
    myListData: null,
    // status: 'idle',
    // error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //     .addCase(fetchMyListData.pending, (state) => {
      //         state.status = 'loading';
      //     })
      .addCase(fetchMyListData.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = "succeeded";
        state.myListData = action.payload;
      });
    // .addCase(fetchMyListData.rejected, (state, action) => {
    //     state.status = 'failed';
    //     state.error = action.payload;
    // });
  },
});

export default myListSlice.reducer;
