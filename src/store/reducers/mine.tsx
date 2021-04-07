import {AnyAction} from 'redux';
export interface MineState {
    title: string
}
const initialState = {title: '个人中心'};
function reducer(state: MineState = initialState, action: AnyAction):MineState {
    switch(action.type) {
    default:
        return state;
    }
}

export default reducer;