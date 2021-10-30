type PropsTypeReset ={
    count:number;
    reset:()=>void

}

export function Reset(props:PropsTypeReset){
    return <div>
        <button disabled={props.count === 0} onClick={props.reset}>reset</button>
    </div>
}

