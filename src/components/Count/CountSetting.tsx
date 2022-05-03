import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import InputBox from "../Input/InputBox";
import './Count.css';

function CountSetting() {

	let [valueMax, setValueMax] = useState(0)
	let [valueStart, setValueStart] = useState(0)

	useEffect(()=>{
		let valueMax = localStorage.getItem('countValueMax')
		let valueStart = localStorage.getItem('countValueMax')
		if(valueMax) {
			let newValueMax = JSON.parse(valueMax)
			setValueMax(newValueMax)
		}
		if(valueStart) {
			let newValueStart = JSON.parse(valueStart)
			setValueMax(newValueStart)
		}
	}, [])

	useEffect(()=>{
		localStorage.setItem('countValueMax', JSON.stringify(valueMax))
		localStorage.setItem('countValueStart', JSON.stringify(valueStart))
	}, [])

	const onClickSetting = () => {
		//code
	}

	const onChange = () => {
		//code
	}

	

	// const noActive = count === 10 ? " noActive" : ""

	return (
		<div className={'countBlock'}>
			<div className={'countSetting'}>
				<InputBox title={'Max Value'} value={valueMax} onChange={setValueMax} />
				<InputBox title={'Start Value'} value={valueStart} onChange={setValueStart} />
			</div>
			<div className={'buttonBox'}>
				<Button disabled={false} name={'Set'} callBack={onClickSetting} />
			</div>
		</div>
	)
}

export default CountSetting