import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import InputBox from "../Input/InputBox";
import './Count.css';

function CountSetting() {

	let [valueMax, setValueMax] = useState<string>('0')
	let [valueStart, setValueStart] = useState<string>('0')

	useEffect(() => {
		let valueMax = localStorage.getItem('countValueMax')
		if (valueMax) {
			let newValueMax = JSON.parse(valueMax)
			setValueMax(newValueMax)
		}
	}, [])
	useEffect(() => {
		let valueStart = localStorage.getItem('countValueStart')
		if (valueStart) {
			let newValueStart = JSON.parse(valueStart)
			setValueStart(newValueStart)
		}
	}, [])

	// useEffect(() => {
	// 	localStorage.setItem('countValueMax', JSON.stringify(valueMax))
	// }, [valueMax])

	// useEffect(() => {
	// 	localStorage.setItem('countValueStart', JSON.stringify(valueStart))
	// }, [valueStart])

	const onClickSetting = () => {
		localStorage.setItem('countValueMax', JSON.stringify(valueMax))
		localStorage.setItem('countValueStart', JSON.stringify(valueStart))
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