const redux = require('redux')
const createStore = redux.legacy_createStore
const bindActionCreators = redux.bindActionCreators


// type of action
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'



// defining an action(type)
// {
//     type : CAKE_ORDERED,
//     quantity:1
// }



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



// reducers(specify how the app's state changes iin response to actions sent to the store)
// (previousState,action) => newState


// initial state
const initialState = {
    numberofCakes : 10
}


// reducer
const reducer = (state = initialState , action) =>{

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

// creating a store(store holding application state)
const store  = createStore(reducer)
// to get initialState
console.log("initial state : ", store.getState())

// anytime the store update it log to console(listener)
const unsubscribe = store.subscribe(()=> console.log("updated state :" , store.getState()))

// to dispatch an action from switch cases by which type of actionCreators
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))



// to bind actions
// const actions = bindActionCreators({object with different actionCreators} ,  toWhatweWanttobind)
const actions = bindActionCreators( {orderCake, restockCake} , store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)


// to unsubscribe(listener)
unsubscribe()



