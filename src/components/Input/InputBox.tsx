import React, { ChangeEvent } from "react";

type boxInputType = {
	title: string
	value: number
	onChange: (value: number) => void
}

function InputBox(props: boxInputType) {

	const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const valueNumber = JSON.parse(e.currentTarget.value)
		props.onChange(valueNumber)
		// console.log(valueNumber)
	}

	return (
		<div className={'inputBox'}>
			{props.title}
			<input type="number" value={props.value} onChange={onChangeInputHandler} />
		</div>
	)
}

export default InputBox