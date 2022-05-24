import React from "react";
import Button from "../Button/Button";
import './Count.css';

type CountType = {
	valueMax: number
	valueStart: number
	count: number
	onClickInc: ()=>void
	onClickReset: ()=>void
	onClickSettingOpen: ()=>void
	visibleCount: boolean
}

function Count(props: CountType) {

	const noActive = props.count === props.valueMax ? " noActive" : ""
	const visibleCountClass = props.visibleCount ? 'activeBox' : 'noActiveBox'
	return (
		
		<div className={'countBlock ' + visibleCountClass}>
			
			<div className={'count' + noActive}>{props.count}</div>
			<div className={'buttonBox'}>
				<Button disabled={props.count >= props.valueMax} name={'inc'} callBack={props.onClickInc} />
				<Button disabled={props.count === props.valueStart} name={'reset'} callBack={props.onClickReset} />
				<Button disabled={false} name={'set'} callBack={props.onClickSettingOpen} />
			</div>
		</div>
	)
}

export default Count