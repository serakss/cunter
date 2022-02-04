type PropsTypeReset ={
    count:string;
    reset:()=>void
    startValue:string
    titleSittings:string
    incorrect:string
}

export function Reset(props:PropsTypeReset){
    const disableReset =()=>{
        if(props.count === props.startValue){
            return true
        }
        if(props.count === props.titleSittings ){
            return true
        }
        if(props.count === props.incorrect ){
            return true
        }
    }
    return <div>
        <button disabled={disableReset()} onClick={props.reset}>reset</button>
    </div>
}

