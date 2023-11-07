const configureStore = require('@reduxjs/toolkit').configureStore
const { getDefaultMiddleware } = require('@reduxjs/toolkit')
const cakeReducers = require('../features/cake/cakeSlice')
const iceCreameReducers = require('../features/iceCream/iceCreameSlice')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const userReducer = require('../features/user/userSlice')



const store = configureStore({
    reducer : {
        cake : cakeReducers,
        iceCream : iceCreameReducers,
        user : userReducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


module.exports = store