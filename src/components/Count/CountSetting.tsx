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
}

function CountSetting(props: CountSettingType) {
	let disable = props.valueStart <= 0 || props.valueMax <= props.valueStart
  let inputBoxStart = props.valueStart < 0 || props.valueMax <= props.valueStart ? 'classDisabled' : ""
	let inputBoxMax = props.valueMax <= 0 || props.valueMax <= props.valueStart ? 'classDisabled' : ''

	return (
		<div className={'countBlock '}>
			<div className={'countSetting'}>
				<div className={inputBoxMax}>
					<InputBox title={'Max Value'} value={props.valueMax} onChange={props.setValueMax} />
				</div>
				<div className={inputBoxStart}>
					<InputBox title={'Start Value'} value={props.valueStart} onChange={props.setValueStart} />
				</div>
			</div>
			<div className={'buttonBox'}>
				<Button disabled={disable} name={'Set'} callBack={props.onClickSetting} />
			</div>
		</div>
	)
}

export default CountSetting