const redux = require('redux')
const createStore = redux.legacy_createStore
const produce = require('immer').produce   // to handle immutable dataStructures 

const initialState = {
    name : 'anyName',
    address : {
        street : '123 Main St',
        city :'Boston',
        state : 'MA'
    }
}


// constant for action type 
const STREET_UPDATE = 'STREET_UPDATE'

// actionCreator
const updateStreet = street =>{
    return {
        type : STREET_UPDATE,
        payload : street
    }
}


// reducer 
const reducer = (state=initialState , action) =>{
    switch(action.type){
        case STREET_UPDATE: 
        //     return {
        //         ...state,                   // to spread all other data in initialState(making a copy)
        //         address:{
        //             ...state.address,            // to spread all other data in address(making a copy)
        //             street: action.payload
        //         }
        //     }
        // }
        return produce(state , (draft) =>{
            draft.address.street = action.payload
        })
        default : {
            return state
        }
    }
}


const store = redux.createStore(reducer)
console.log("initialState : " , store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log("updated state :" , store.getState())
})

store.dispatch(updateStreet('somewhere on earth'))
unsubscribe()