
let initialState = 0

export type initialStateType = typeof initialState

export const valueStartReduser = (state: initialStateType = initialState, action: actionType): initialStateType => {
	switch (action.type) {
		case 'ON-CLICK-SETTING': {
			return state + 1
		}
		default: return state
	}
}

type actionType = onClickSettingACType

type onClickSettingACType = ReturnType<typeof onClickSettingAC>
export const onClickSettingAC = () => {
	return {
		type: 'ON-CLICK-SETTING',
	} as const
}