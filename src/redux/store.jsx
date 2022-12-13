import { combineReducers, configureStore } from "@reduxjs/toolkit";
import PostsReducer from "./PostsSlice";
import UsersReducer from "./UserSlice";


const reducer = combineReducers({
    post: PostsReducer,
    user: UsersReducer
});

const store = configureStore({reducer}); 
export default store; 
