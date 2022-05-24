import React from "react";
import Button from "../Button/Button";
import InputBox from "../Input/InputBox";
import './Count.css';

type CountSettingType = {
	valueMax: number
	valueStart: number
	setValueMax: (value: number) => void
	setValueStart: (value: number) => void
	onClickSetting: () => void
	visibleCount: boolean
}

function CountSetting(props: CountSettingType) {

	const lokalValueStart = localStorage.getItem('countValueStart')
	const lokalValueMax = localStorage.getItem('countValueMax')

	let disabled = false

	if (lokalValueStart && lokalValueMax) {
		let newLocalValueStart = JSON.parse(lokalValueStart)
		let newLocalValueMax = JSON.parse(lokalValueMax)
		if (props.valueStart === newLocalValueStart && props.valueMax === newLocalValueMax) {
			disabled = true
		} else {
			disabled = false
		}
	}

	let inputBoxStart = ''
	let inputBoxMax = ''

	if (props.valueStart < 0) {
		disabled = true
		inputBoxStart = 'classDisabled'
	}

	if (props.valueMax <= 0) {
		disabled = true
		inputBoxMax = 'classDisabled'
	}

	if (props.valueMax <= props.valueStart) {
		disabled = true
		inputBoxMax = 'classDisabled'
		inputBoxStart = 'classDisabled'
	}

	const visibleCountClass = props.visibleCount ? 'activeBox' : 'noActiveBox'

	return (
		<div className={'countBlock ' + visibleCountClass}>
			<div className={'countSetting'}>
				<div className={inputBoxMax}>
					<InputBox title={'Max Value'} value={props.valueMax} onChange={props.setValueMax} />
				</div>
				<div className={inputBoxStart}>
					<InputBox title={'Start Value'} value={props.valueStart} onChange={props.setValueStart} />
				</div>
			</div>
			<div className={'buttonBox'}>
				<Button disabled={disabled} name={'Set'} callBack={props.onClickSetting} />
			</div>
		</div>
	)
}

export default CountSetting