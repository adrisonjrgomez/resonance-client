import { combineReducers } from 'redux'
import CategoryReducer from './category/category.reducer'
import FurnitureReducer from './furniture/furniture.reducer';
import { CategoryState } from './category/category.type'
import { FurnitureState } from './furniture/furniture.types';

export default combineReducers(
    {
        category: CategoryReducer,
        furniture: FurnitureReducer,
    }
)


export interface RootType {
    category: CategoryState,
    furniture: FurnitureState,
}