import {IncButton} from "../bottons/inc";
import {Reset} from "../bottons/reset";

export type PropsTypeCounter = {
    count: number;
    increment: () => void;
    reset: () => void
    max: number
}

export function Counter(props: PropsTypeCounter) {
    return <div className="counter">
        <div className="display"><span className={props.count === props.max ? "error_massage" : ""}>{props.count}</span>
        </div>
        <div className="button_container">
            <IncButton
                increment={props.increment}
                count={props.count}
                max={props.max}/>
            <Reset
                count={props.count}
                reset={props.reset}/>

        </div>
    </div>
}