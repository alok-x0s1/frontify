import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/authSlice"

const store = configureStore({
    reducer: {
        // All reducers
        auth: authReducer
        // TODO: make another reducer post : postSlice
    }
})

export default store