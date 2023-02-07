import {configureStore} from '@reduxjs/toolkit'
import colorReducer from "./color/colorSlice";
import countReducer from "./count/count";

export default configureStore ({
    reducer:{
        color:colorReducer,
        count:countReducer
    }
})