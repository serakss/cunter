import {Counter} from "./componentsDisplay/Counter";
import './App.css';
import {ChangeEvent, useEffect, useState} from "react";

import {SettingsDisplay} from "./componentsDisplay/Sitings/SettingsDisplay";


function App() {
    const [count, setCount] = useState("0");
    const [maxValue, setMaxValue] = useState("0")
    const [startValue, setStartValue] = useState("0")

    let titleSittings = "Нажмите SET";
    let incorrect = "Некоректное значение"
    let max = maxValue;

   useEffect(()=>{
       let startValue = localStorage.getItem("startValue");
       let maxValue = localStorage.getItem("maxValue")
       if (startValue) {
           setStartValue(startValue)
       }
       if (maxValue) {
           setMaxValue(maxValue)
       }
       if (startValue) {
           setCount(startValue)
       }
   },[])
    useEffect(()=>{
        localStorage.setItem("startValue", startValue)
    },[startValue])
    useEffect(()=>{
        localStorage.setItem("maxValue", maxValue)
    },[maxValue])


    const increment = () => setCount(String(Number(count) + 1));
    const reset = () => setCount(startValue);
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
        setCount(titleSittings)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.value)
        setCount(titleSittings)
    }
    const IncorrectValue = () => {
        setCount(incorrect)
    }

    const setValue = () => {
       // localStorage.setItem("startValue", startValue)
        //localStorage.setItem("maxValue", maxValue)

        setCount(startValue)

    }

    return <div>
        <SettingsDisplay
            startValue={startValue}
            maxValue={maxValue}
            onChangeMaxValue={onChangeMaxValue}
            onChangeStartValue={onChangeStartValue}
            setValue={setValue}
            titleSittings={titleSittings}
            IncorrectValue={IncorrectValue}

        />
        <Counter
            startValue={startValue}
            count={count}
            increment={increment}
            reset={reset}
            max={max}
            titleSittings={titleSittings}
            incorrect={incorrect}
        />
    </div>

}

export default App;
