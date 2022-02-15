import { createAsyncThunk, createSlice, bindActionCreators } from '@reduxjs/toolkit'
import { useRef } from 'react'
import { useAppDispatch } from 'redux/hooks'
import CustomApiProvider from 'src/services/CustomApiProvider'
import { Endpoints } from 'utils/endpoints'

//User types

export interface User {
    uid: string;
    email: string;
}

export interface UserState {
    user?: User
}

const initialState: UserState = {
    user: undefined
}

//User Reducer
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      reset: () => initialState,
    },
})

const LoginUser = 'user/loginUser'

const loginUser = (amount: number) => {
  return {
    type: LoginUser,
    payload: amount,
  }
}

//Custom hook
export function useUserActions() {
    const dispatch = useAppDispatch()
    const actions = {
      ...userSlice.actions,
      loginUser,
    }
    const refActions = useRef(bindActionCreators(actions, dispatch))
    return refActions.current
}