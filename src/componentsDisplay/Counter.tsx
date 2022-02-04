import {IncButton} from "../bottons/inc";
import {Reset} from "../bottons/reset";

export type PropsTypeCounter = {
    count: string;
    increment: () => void;
    reset: () => void
    max: string
    startValue:string
    titleSittings:string
    incorrect:string
}

export function Counter(props: PropsTypeCounter) {
    return <div className="counter">
        <div className="display"><span className={props.count === props.max ? "error_massage" : ""}>{props.count}</span>
        </div>
        <div className="button_container">
            <IncButton
                increment={props.increment}
                count={props.count}
                max={props.max}
                titleSittings={props.titleSittings}
                incorrect={props.incorrect}
            />
            <Reset
                count={props.count}
                reset={props.reset}
                startValue={props.startValue}
                titleSittings={props.titleSittings}
                incorrect={props.incorrect}
            />

        </div>
    </div>
}