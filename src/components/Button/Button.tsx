import React from "react";
import './Button.css';

type ButtonType = {
	name: string
	callBack: () => void
	disabled: boolean
}

function Button(props: ButtonType) {

	const onClickHandler = () => {
		props.callBack()
	}

	return (
		<button className={'btn'} disabled={props.disabled} onClick={onClickHandler}>{props.name}</button>
	)
}

export default Button