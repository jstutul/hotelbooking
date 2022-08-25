import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE={
    user:JSON.parse(localStorage.getItem("user")) || null,
    error:null,
    loading:false,
};
export const AuthContext=createContext(INITIAL_STATE)

const SearchReducer=(state,action)=>{
    switch(action.type){
        case "LOGIN_START":
            return{
                user:null,
                error:null,
                loading:true,
            };
        case "LOGIN_SUCCESS":
            return {
                user:action.payload,
                error:null,
                loading:false,
            };
        case "LOGIN_FAILURE":
            return {
                user:null,
                error:action.payload,
                loading:false,
            }; 
        case "LOGOUT":
            return {
                user:null,
                error:null,
                loading:false,
            };     
        default:
            return state;        
    }
};

export const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(SearchReducer,INITIAL_STATE);
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.user))
    },[state.user])
    return (
        <AuthContext.Provider value={{user:state.user,error:state.error,loading:state.loading,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}