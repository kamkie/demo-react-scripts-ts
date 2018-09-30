import * as React from 'react';
import './Hello.css';

export interface Props {
    name: string;
    name2?: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

interface State {
    currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const {name, name2, enthusiasmLevel = 1} = this.props;
        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">Hello {name + getExclamationMarks(enthusiasmLevel)}</div>
                <div className="greeting2">Hello {name2 + getExclamationMarks(enthusiasmLevel)}</div>
                <div>public url {process.env.PUBLIC_URL}</div>
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
