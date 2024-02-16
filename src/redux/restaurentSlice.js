import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// creating thunk
// thunk is sed to make API calls in redux

export const fetchRestaurent=createAsyncThunk('restaurentlist/fetchRestaurent',()=>{
    const result=axios.get('/restaurant.json').then(response=>response.data.restaurants)
    console.log("restaurant data");
    console.log(result);
    return result;
})

const restaurentSlice=createSlice({
    name:"restaurentlist",
    initialState:{
        loading:false,      //pending state
        allRestaurent:[],   //resolve state
        Error:"" , //rejected state
        searchRestaurent:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurent.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(fetchRestaurent.fulfilled,(state,action)=>{
            state.allRestaurent=action.payload;
            state.searchRestaurent=action.payload;
            state.loading=false;
            state.Error=""
        })
        builder.addCase(fetchRestaurent.rejected,(state,action)=>{
            state.loading=false;
            state.allRestaurent=[]
            state.Error=action.error.message
        })
    },
    reducers:{
        search:(state,action)=>{
            state.allRestaurent=state.searchRestaurent.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})
export default restaurentSlice.reducer;
export const {search}=restaurentSlice.actions;