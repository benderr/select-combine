import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {increment, decrement} from "../actions";
import {Counter} from "../components/Counter";
import PropTypes from "prop-types";

@connect(mapState, mapDispatch)
class CounterContainer extends React.Component {
    static propTypes = {
        increment: PropTypes.func,
        decrement: PropTypes.func,
        number: PropTypes.number,
    };

    render() {
        const {number, increment, decrement} = this.props;
        return (
            <div className="main">
                <div className="widget_block">
                    <Counter increment={increment} decrement={decrement} number={number}/>
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
            increment,
            decrement,
        }, dispatch),
    };
}


export {CounterContainer};