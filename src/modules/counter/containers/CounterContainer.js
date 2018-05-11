import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {increment, decrement} from "../actions";
import {Counter} from "../components/Counter";
import PropTypes from "prop-types";

@connect(mapState, mapDispatch)
class CounterContainer extends React.Component {
    static propTypes = {
        incrementAction: PropTypes.func.isRequired,
        decrementAction: PropTypes.func.isRequired,
        number: PropTypes.number,
    };

    render() {
        const {number, incrementAction, decrementAction} = this.props;
        return (
            <div className="main">
                <div className="widget_block">
                    <Counter increment={incrementAction} decrement={decrementAction} number={number}/>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    return {
        number: state.counter.number,
    };
}

function mapDispatch(dispatch) {
    return {
        ...bindActionCreators({
            incrementAction: increment,
            decrementAction: decrement,
        }, dispatch),
    };
}


export {CounterContainer};