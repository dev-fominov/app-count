let initialState = {
	valueMax: 1
}

export type initialStateType = typeof initialState

export const valueMaxReduser = (state: initialStateType = initialState, action: actionType): initialStateType => {
	switch (action.type) {
		case 'SET-VALUE-MAX': {
			{console.log(state.valueMax)}
			return {
				...state, valueMax: action.valueMax
			}
		}
		default: return state
	}
}

type actionType = setValueMaxACType

type setValueMaxACType = ReturnType<typeof setValueMaxAC>
export const setValueMaxAC = (valueMax: number) => {
	return {
		type: 'SET-VALUE-MAX', valueMax
	} as const
}