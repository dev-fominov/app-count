import React, { useState } from "react";
import Button from "../Button/Button";
import './Count.css';

function Count() {

	let [count, setCount] = useState<number>(1)

	const onClickInc = () => {
		setCount(++count)
	}

	const onClickReset = () => {
		setCount(0)
	}

	const noActive = count === 10 ? " noActive" : ""

	return (
		<div className={'countBlock'}>
			<div className={'count' + noActive}>{count}</div>
			<div className={'buttonBox'}>
				<Button disabled={count >= 10} name={'inc'} callBack={onClickInc} />
				<Button disabled={count === 0} name={'reset'} callBack={onClickReset} />
			</div>
		</div>
	)
}

export default Count