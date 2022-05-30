let initialState = {
	count: 0,
	valueStart: 0,
	valueMax: 1
}

export type initialStateType = typeof initialState


export const countReduser = (state: initialStateType = initialState, action: actionType): initialStateType => {
	switch (action.type) {
		case 'ON-CLICK-INC': {
			return {
				...state, count: state.count + 1
			}
		}
		case 'ON-CLICK-RESET': {
			return {...state, count: action.valueStart }
		}
		case 'ON-CLICK-SETTING': {
			return {
				...state, count: action.valueStart
			}
		}
		case 'SET-VALUE-LOCALSTORAGE': {
			return {...state, count: action.valueStart }
		}
		default: return state
	}
}

type actionType = onClickIncACType | onClickResetACType | onClickSettingCountACType | setValuesLocalstorageACType

type onClickIncACType = ReturnType<typeof onClickIncAC>
export const onClickIncAC = () => {
	return {
		type: 'ON-CLICK-INC',
	} as const
}

type onClickResetACType = ReturnType<typeof onClickResetAC>
export const onClickResetAC = (valueStart: number) => {
	return {
		type: 'ON-CLICK-RESET', valueStart
	} as const
}

type onClickSettingCountACType = ReturnType<typeof onClickSettingCountAC>
export const onClickSettingCountAC = (valueStart: number) => {
	return {
		type: 'ON-CLICK-SETTING', valueStart
	} as const
}

type setValuesLocalstorageACType = ReturnType<typeof setValuesLocalstorageAC>
export const setValuesLocalstorageAC = (valueStart: number) => {
	return {
		type: 'SET-VALUE-LOCALSTORAGE', valueStart
	} as const
}