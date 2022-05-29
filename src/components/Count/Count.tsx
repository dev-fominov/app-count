import React from "react";
import Button from "../Button/Button";
import './Count.css';

type CountType = {
	valueMax: number
	valueStart: number
	count: number
	onClickInc: ()=>void
	onClickReset: ()=>void
	onClickSetting: ()=>void
}

function Count(props: CountType) {
	const noActive = props.count === props.valueMax ? " noActive" : ""

	return (
		<div className={'countBlock '}>
			<div className={'count' + noActive}>{props.count}</div>
			<div className={'buttonBox'}>
				<Button disabled={props.count >= props.valueMax} name={'inc'} callBack={props.onClickInc} />
				<Button disabled={props.count === props.valueStart} name={'reset'} callBack={props.onClickReset} />
				<Button disabled={false} name={'set'} callBack={props.onClickSetting} />
			</div>
		</div>
	)
}

export default Count