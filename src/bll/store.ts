import { loadState, saveState } from './../utils/localstorage';
import { combineReducers, createStore } from 'redux';
import { countReduser } from './count-reduser';
import { valueMaxReduser } from './valueMax-reduser';
import { valueStartReduser } from './valueStart-reduser';

// import {tasksReducer} from "./tasksReducer";
// import {todolistsReducer} from "./todolistsReducer";

export const rootReducer = combineReducers({
	count: countReduser,
	valueMax: valueMaxReduser,
	valueStart: valueStartReduser
});


export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
	saveState({
		count: store.getState().count,
		valueMax: store.getState().valueMax,
		valueStart: store.getState().valueStart
	})
})


export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store

// @ts-ignore
window.store = store