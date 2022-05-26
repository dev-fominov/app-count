
let initialState = 0

export type initialStateType = typeof initialState


export const countReduser = (state: initialStateType = initialState, action: actionType): initialStateType => {
	switch (action.type) {
		case 'ON-CLICK-INC': {
			return state
		}
		case 'ON-CLICK-RESET': {
			return state
		}
		default: return state
	}
}

type actionType = onClickIncACType | onClickResetACType

type onClickIncACType = ReturnType<typeof onClickIncAC>
export const onClickIncAC = () => {
	return {
		type: 'ON-CLICK-INC',
	} as const
}

type onClickResetACType = ReturnType<typeof onClickResetAC>
export const onClickResetAC = () => {
	return {
		type: 'ON-CLICK-RESET',
	} as const
}