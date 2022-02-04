import {useEffect, useState} from "react";
import {InputValue} from "./Value";

type PropsType = {}

export function SettingsCounter(props: PropsType) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let valueAsString = localStorage.getItem("counterValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(value))
    }, [value])

    const incHandler = () => {
        setValue(value + 1);
    }



        return (
        <div>
            <h1>{}</h1>
            <h2>max value</h2>
            <InputValue

            />
            <h2>start value</h2>
            <InputValue/>
            <button onClick={incHandler}>set</button>

        </div>
    )
}