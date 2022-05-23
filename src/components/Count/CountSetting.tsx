import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import InputBox from "../Input/InputBox";
import './Count.css';

type CountSettingType = {
	valueMax: number
	valueStart: number
	setValueMax: (value: number)=>void
	setValueStart: (value: number)=>void
	onClickSetting: ()=>void
}

function CountSetting(props: CountSettingType) {

	// const noActive = count === 10 ? " noActive" : ""

	return (
		<div className={'countBlock'}>
			<div className={'countSetting'}>
				<InputBox title={'Max Value'} value={props.valueMax} onChange={props.setValueMax} />
				<InputBox title={'Start Value'} value={props.valueStart} onChange={props.setValueStart} />
			</div>
			<div className={'buttonBox'}>
				<Button disabled={false} name={'Set'} callBack={props.onClickSetting} />
			</div>
		</div>
	)
}

export default CountSetting