import * as React from 'react';
import './Hello.css';

export interface IProps {
    name: string;
    name2?: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

interface IState {
    currentEnthusiasm: number;
}

class Hello extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        const {name, name2} = this.props;
        const currentEnthusiasm = this.props.enthusiasmLevel !== null && this.props.enthusiasmLevel !== undefined ? this.props.enthusiasmLevel : 1;

        if (currentEnthusiasm <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(currentEnthusiasm)}
                </div>
                <div className="greeting2">
                    Hello {name2 + getExclamationMarks(currentEnthusiasm)}
                </div>
                <button onClick={this.props.onDecrement}>-</button>
                <button onClick={this.props.onIncrement}>+</button>
            </div>
        );
    }

}

export default Hello;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
