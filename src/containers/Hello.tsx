import {connect} from 'react-redux';
import {Dispatch} from "redux";
import * as actions from '../actions/';
import Hello from "../components/Hello";
import {IStoreState} from '../types';

export function mapStateToProps({enthusiasmLevel, languageName}: IStoreState, ownProps: any) {
    return {
        enthusiasmLevel,
        name: languageName,
        name2: ownProps.name2,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
