
type IncButtonType ={
    count:string;
    max: string;
    increment: ()=> void;
    titleSittings:string
    incorrect:string
}





export function IncButton(props:IncButtonType) {
    const disableInc =()=>{
        if (props.count === props.max){
            return true
        }
        if(props.count === props.titleSittings ){
            return true
        }
        if(props.count === props.incorrect ){
            return true
        }

    }


    return <div className="batonCount">
        <button disabled={disableInc()} onClick={props.increment}>inc</button>
    </div>
}



