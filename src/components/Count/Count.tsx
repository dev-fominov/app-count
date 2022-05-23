import React, { useState } from "react";
import Button from "../Button/Button";
import './Count.css';

type CountType = {
	valueMax: number
	valueStart: number
	count: number
	onClickInc: ()=>void
	onClickReset: ()=>void
}

function Count(props: CountType) {
// debugger;
	

	const noActive = props.count === props.valueMax ? " noActive" : ""
	// const countCNT = count === 0 ? props.valueStart : count
	return (
		
		<div className={'countBlock'}>
			
			<div className={'count' + noActive}>{props.count}</div>
			<div className={'buttonBox'}>
				<Button disabled={props.count >= props.valueMax} name={'inc'} callBack={props.onClickInc} />
				<Button disabled={props.count === props.valueStart} name={'reset'} callBack={props.onClickReset} />
			</div>
		</div>
	)
}

export default Count