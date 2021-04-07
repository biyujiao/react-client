import {AnyAction} from 'redux';
export interface CarState {
    title: string
}
const initialState = {title: '购物车'};
function reducer(state: CarState = initialState, action: AnyAction):CarState {
    switch(action.type) {
    default:
        return state;
    }
}

export default reducer;