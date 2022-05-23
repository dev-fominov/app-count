import React, { useEffect, useState } from 'react';
import './App.css';
import Count from './components/Count/Count';
import CountSetting from './components/Count/CountSetting';

function App() {

  let [valueMax, setValueMax] = useState<number>(0)
	let [valueStart, setValueStart] = useState<number>(0)

 
  

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
			setCount(newValueStart)
		}
	}, [])

  const onClickSetting = () => {
		localStorage.setItem('countValueMax', JSON.stringify(valueMax))
		localStorage.setItem('countValueStart', JSON.stringify(valueStart))
	}

	// const onChange = () => {
	// 	//code
	// }


  let [count, setCount] = useState<number>(valueStart)

  // useEffect(() => {

  // }, [count])

	const onClickInc = () => {
		setCount(count + 1)
	}

	const onClickReset = () => {
		setCount(valueStart)
	}

  {
    // debugger;
    }

  return (
    
    <div className="App">
      
      <CountSetting 
        valueMax={valueMax} 
        valueStart={valueStart}
        setValueMax={setValueMax} 
        setValueStart={setValueStart} 
        onClickSetting={onClickSetting} 
        />
      <Count
        valueMax={valueMax} 
        valueStart={valueStart}     
        count={count}     
        onClickInc={onClickInc}     
        onClickReset={onClickReset}     
      />
    </div>
  );
}

export default App;
