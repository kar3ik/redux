const redux = require('redux')
const createStore = redux.legacy_createStore
const bindActionCreators = redux.bindActionCreators
const  combineReducers = redux.combineReducers    //to combine multiple reducers 

// type of action
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'


const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'



// action creator(a function that return an action)
function orderCake(){
    return {
        type : CAKE_ORDERED,
        payload:1
    }
}

function restockCake(qty=1){
    return{
        type:CAKE_RESTOCKED,
        payload:qty
    }
}


function orderIceCream( qty = 1){
    return {
        type : ICECREAM_ORDERED,
        payload:qty
    }
}

function restockIceCream(qty=1){
    return{
        type:ICECREAM_RESTOCKED,
        payload:qty
    }
}





// reducers(specify how the app's state changes iin response to actions sent to the store)
// (previousState,action) => newState


// initial state
const initialCakeState = {
    numberofCakes : 10,
    
}

const initialIceCreamState = {
    numberofIceCreams : 20

}
// reducer

// reducer 1
const cakeReducer = (state = initialCakeState , action) =>{

    switch(action.type){
        case CAKE_ORDERED :{
            return{
                ...state,                        // copying the state object(using spread operator)
                numberofCakes: state.numberofCakes -1
            }
        }
        case CAKE_RESTOCKED :{
            return {
                ...state,
                numberofCakes: state.numberofCakes + action.payload
            }
        }
        default:
            return state
    }
}


// reducer 2

const iceCreamReducer = (state = initialIceCreamState , action) =>{

    switch(action.type){
        case ICECREAM_ORDERED :{
            return{
                ...state,                        // copying the state object(using spread operator)
                numberofIceCreams: state.numberofIceCreams -1
            }
        }
        case ICECREAM_RESTOCKED :{
            return {
                ...state,
                numberofIceCreams: state.numberofIceCreams + action.payload
            }
        }
        default:
            return state
    }
}


// creating a store(store holding application state)
const rootReducer  = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

const store = createStore(rootReducer)




// to get initialState
console.log("initial state : ", store.getState())

// anytime the store update it log to console(listener)
const unsubscribe = store.subscribe(()=> console.log("updated state :" , store.getState()))



// to bind actions
// const actions = bindActionCreators({object with different actionCreators} ,  toWhatweWanttobind)
const actions = bindActionCreators( {orderCake, restockCake , orderIceCream, restockIceCream} , store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)


// to unsubscribe(listener)
unsubscribe()



