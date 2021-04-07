import {combineReducers, ReducersMapObject, Reducer} from 'redux';
import {connectRouter} from 'connected-react-router';
import history from '../history';
import home, {HomeState} from './home';
import mine, {MineState} from './mine';
import car, {CarState} from './car';

const reducers:ReducersMapObject = {
    router: connectRouter(history),
    home,
    mine,
    car
};

type RootState = {
    [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>
};
// 最終得到根状态：
// type RootState = {
//     home: HomeState,
//     mine: MineState,
//     car: CarState
// };

const rootReducer:Reducer<RootState> = combineReducers<RootState>(reducers);
export {
    RootState,
    HomeState,
    MineState,
    CarState
};
export default rootReducer;
