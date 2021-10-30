
type IncButtonType ={
    count:number;
    max: number;
    increment: ()=> void;

}



export function IncButton(props:IncButtonType) {
    return <div className="batonCount">
        <button disabled={props.count === props.max} onClick={props.increment}>inc</button>
    </div>
}



