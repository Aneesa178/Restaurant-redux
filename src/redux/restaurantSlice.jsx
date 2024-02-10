import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//creating Thunk
//Thunk is used make API calls in redux
export const fetchRestaurant=createAsyncThunk('restaurantList/fetchRestaurant',()=>{
    const result=axios.get('/restaurant.json').then(response=>response.data.restaurants)
    console.log("===restaurant data===");
    console.log(result);
    return result
})

const restaurantSlice=createSlice({
 name:"restaurantList",
 initialState:{
    loading:false,//pending state
    allRestaurant:[],//resolve state
    error:"",//rejected state
    searchRestaurant:[]
 },
 extraReducers:(builder)=>{
    builder.addCase(fetchRestaurant.pending,(state)=>{
        state.loading=true;
    })
    builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
        state.allRestaurant=action.payload;
        state.searchRestaurant=action.payload;
        state.loading=false;
        state.error="";
    })
    builder.addCase(fetchRestaurant.rejected,(state,action)=>{
        state.loading=false;
        state.allRestaurant=[]
        state.error=action.error.message
    })
 },
 reducers:{
    search:(state,action)=>{
        console.log('===inside search');
        console.log(state);
        state.allRestaurant=state.searchRestaurant.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))//payloadil ulla value allRestaurantilekk varaan
    }
 }
}) 
export default restaurantSlice.reducer;
export const{search}=restaurantSlice.actions;