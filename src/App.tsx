import {Counter} from "./componentsDisplay/Counter";
import {SettingsCounter} from "./componentsDisplay/settings";
import './App.css';
import {useState} from "react";



function App() {
    const[count,setCount]=useState(0);
    const increment =()=>setCount(count + 1);
    const reset =()=>setCount(0);
    let max = 5;
    return <div>
        <SettingsCounter/>
        <Counter
        count={count}
        increment={increment}
        reset={reset}
        max={max}
        />
    </div>

}

export default App;
