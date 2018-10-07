import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import * as actions from '../actions/';
import Hello, {Props} from '../components/Hello';
import {StoreState} from '../types';

export function mapStateToProps(state: StoreState, ownProps: any): Props {
    return {
        enthusiasmLevel: state.enthusiasmLevel || ownProps.enthusiasmLevel,
        name: state.languageName,
        name2: ownProps.name2,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello);
