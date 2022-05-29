import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import { onClickIncAC, onClickResetAC, onClickSettingCountAC } from './bll/count-reduser';
import { AppStateType } from './bll/store';
import { setValueMaxAC } from './bll/valueMax-reduser';
import { onClickSettingAC, setValueStartAC } from './bll/valueStart-reduser';
import Count from './components/Count/Count';
import CountSetting from './components/Count/CountSetting';

function App() {

  const count = useSelector<AppStateType, number>(state => state.count.count);
  const valueStart = useSelector<AppStateType, number>(state => state.valueStart.valueStart);
  const valueMax = useSelector<AppStateType, number>(state => state.valueMax.valueMax);

  const dispatch = useDispatch()

  // console.log(valueMax)

  // let [valueMax, setValueMax] = useState<number>(0)

  // let [valueStart, setValueStart] = useState<number>(0)

  // useEffect(() => {
  //   let valueMax = localStorage.getItem('countValueMax')
  //   if (valueMax) {
  //     let newValueMax = JSON.parse(valueMax)
  //     setValueMax(newValueMax)
  //   }
  // }, [])
  // useEffect(() => {
  //   let valueStart = localStorage.getItem('countValueStart')
  //   if (valueStart) {
  //     let newValueStart = JSON.parse(valueStart)
  //     setValueStart(newValueStart)
  //     setCount(newValueStart)
  //   }
  // }, [])
  
  // const onClickSetting = () => {
  //   localStorage.setItem('countValueMax', JSON.stringify(valueMax))
  //   localStorage.setItem('countValueStart', JSON.stringify(valueStart))
  //   setCount(valueStart)
  //   setVisibleCount(false)
  // }

  // let [count, setCount] = useState<number>(valueStart)

  const onClickInc = () => {
    dispatch(onClickIncAC())
  }
  const onClickReset = () => {
    // setCount(valueStart)
    dispatch(onClickResetAC(valueStart))
  }

  let [visibleCount, setVisibleCount] = useState<boolean>(false)

  const onClickSetting = () => {
    setVisibleCount(!visibleCount)
    dispatch(onClickSettingAC(valueStart, valueMax))
    dispatch(onClickSettingCountAC(valueStart))
  }

  const setValueMax = (value: number) => {
    dispatch(setValueMaxAC(value))
  }

  const setValueStart = (value: number) => {
    dispatch(setValueStartAC(value))
  }
 
  return (
    <div className="App">
     {
       visibleCount && <CountSetting
          valueMax={valueMax}
          valueStart={valueStart}
          setValueMax={setValueMax}
          setValueStart={setValueStart}
          onClickSetting={onClickSetting}
        />
     }
      {
        !visibleCount && <Count
        valueMax={valueMax}
        valueStart={valueStart}
        count={count}
        onClickInc={onClickInc}
        onClickReset={onClickReset}
        onClickSetting={onClickSetting}
      />
      }
    
    </div>
  );
}

export default App;
