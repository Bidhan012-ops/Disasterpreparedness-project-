import {createSlice,configureStore}  from '@reduxjs/toolkit'

 const formslice=createSlice({
    name:"form",
    initialState:{
     fullName: "",
    email: "",
    },
    reducers:{
      setform:(state,action)=>{
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      }
    }
 })
 const alertslice=createSlice({
  name:'alert',
  initialState:{
    Alert:"",
  },
  reducers:{
    setalert:(state,action)=>{
    console.log(action.payload);
    }
  }
 })
 const scoreslice=createSlice({
    name:"form",
    initialState:0,
    reducers:{
      setscore:(state,action)=>{
          return state+=action.payload;
      }
    }
 })
const couterstore=configureStore({
    reducer:{
        form:formslice.reducer,
        Alertm:alertslice.reducer,
        score:scoreslice.reducer,
    }
});
export default couterstore;
export const formaction=formslice.actions;
export const alertaction=alertslice.actions;
export const scoreaction=scoreslice.actions;
