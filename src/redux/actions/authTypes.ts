// authTypes.ts

import { User } from "./userTypes";

// Definimos los tipos de acciones para el reducer de autenticación
export const LOGIN_SUCCESS = "LOGIN";
export const LOGIN_FAILURE = "ERROR";

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: User;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string;
}

export type AuthActionTypes = LoginSuccessAction | LoginFailureAction;
