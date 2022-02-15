import { createAsyncThunk, createSlice, bindActionCreators, PayloadAction } from '@reduxjs/toolkit'
import { useRef } from 'react'
import { useAppDispatch } from '../redux/hooks'
import CustomApiProvider from '../services/CustomApiProvider'
import { Endpoints } from '../utils/endpoints'
import { Strings } from '../utils/strings'

export interface ParkUser {
    uid: string
    firstName: string
    lastName?: string
    picture?: string
    phone: number
    id: number
    email?: string
    country?: string
    state?: string
    city?: string
    address?: string
    birthday?: string
    mainRol:string
    companyRol: string
    workingIn?: string[]
    modules: any[]
    badge: string[]
}

export interface ParkUsersState {
    parkUsers?: ParkUser[]
}

const initialState: ParkUsersState = {
    parkUsers:[]
}

//User Reducer
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      reset: () => initialState,
    },
    extraReducers: builder => {}
})

export const getParkUsers = createAsyncThunk('users/getParkUsers',async () => {
  try{
    const parkUsersResult = await CustomApiProvider.get(Endpoints.displayUsers) as ParkUser[];
    return { parkUsers: parkUsersResult }
  }catch(e){
    console.error(`${e}`)
    return { error: `${e}` }
  }
});

//Custom hook
export function useUsersActions() {
    const dispatch = useAppDispatch()
    const actions = {
      ...usersSlice.actions,
      getParkUsers,
    }
    const refActions = useRef(bindActionCreators(actions, dispatch))
    return refActions.current
}