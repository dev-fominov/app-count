let initialState = {
	valueStart: 0,
	valueMax: 1
}

export type initialStateType = typeof initialState

export const valueStartReduser = (state: initialStateType = initialState, action: actionType): initialStateType => {
	switch (action.type) {
		case 'SET-VALUE-START': {
			return {
				...state, valueStart: action.valueStart
			}
		}
		case 'ON-CLICK-SETTING': {
			return {
				...state, valueStart: action.valueStart, valueMax: action.valueMax
			}
		}
		default: return state
	}
}

type actionType = setValueStartACType | onClickSettingACType

type setValueStartACType = ReturnType<typeof setValueStartAC>
export const setValueStartAC = (valueStart: number) => {
	return {
		type: 'SET-VALUE-START', valueStart
	} as const
}

type onClickSettingACType = ReturnType<typeof onClickSettingAC>
export const onClickSettingAC = (valueStart: number, valueMax: number) => {
	return {
		type: 'ON-CLICK-SETTING', valueStart, valueMax
	} as const
}