import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import VideoProp from './Types.ts';

interface ExploreVideoState {
  items: VideoProp[];
  loading: boolean;
  error?: string;
}

const initialState: ExploreVideoState = {
  items: [],
  loading: true,
};

export const fetchExploreVideos = createAsyncThunk(
  'exploreVideos/fetchExploreVideos',
  async (q:string, thunkAPI) => {
    const apiUrl: string = import.meta.env.VITE_API_URL_HOMEPAGE;
    const apiKey: string = import.meta.env.VITE_API_KEY_;
    
    try{
    const response = await axios.get(`${apiUrl}/search`, {
      params: {
        part: 'snippet',
        q,
        type: 'video',
        key: apiKey,
        maxResults: 24,
      },
    });
    return response.data.items;
    } catch(error: any){
      if (error.response && error.response.data){
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
  }
);

const exploreVideoSlice = createSlice({
  name: 'exploreVideos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExploreVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExploreVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchExploreVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Error loading...';
      });
  },
});

export default exploreVideoSlice.reducer;

