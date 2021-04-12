import * as types from '@/store/action-types';
import { AnyAction } from 'redux';
const acitons = {
    setCurrentCategory(currentCategory: string):AnyAction {
        return {
            type: types.SET_CURRENT_CATEGORY,
            payload: currentCategory
        };
    }
};
export default acitons;