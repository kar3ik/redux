
import {configureStore} from '@reduxjs/toolkit'
import iceCreameReducer from '../features/iceCream/iceCreameSlice'
import userReducer from '../features/user/userSlice'
import cakeReducers from '../features/cake/cakeSlice'



const store = configureStore({
    reducer : {
        cake : cakeReducers,
        iceCream : iceCreameReducer,
        user : userReducer,
    },
    // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store