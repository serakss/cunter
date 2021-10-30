import {ChangeEvent, useState} from "react";
type InputType = {
    parentValue?:number
}

export function InputValue(props:InputType) {

    const [parentValue, setParentValue] = useState("")
    const onChange=(e:ChangeEvent<HTMLInputElement>)=>{setParentValue(e.currentTarget.value)}
    return <input type={"number"} value={parentValue} onChange={onChange}/>


}