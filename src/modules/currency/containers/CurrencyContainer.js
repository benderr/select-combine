import React from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
//import {increment, decrement} from "../actions";
import {CurrencyView} from "../components/CurrencyView";
//import PropTypes from "prop-types";

@connect(mapState, mapDispatch)
class CurrencyContainer extends React.Component {
    render() {
        //const {number, incrementAction, decrementAction} = this.props;
        return (
            <div className="main">
                <div className="widget_block">
                    <CurrencyView loading={false}
                                  update={() => {
                                      console.log('updating');
                                  }}
                                  pair="EUR_USD"
                                  value={1.192176}/>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    // return {
    //     number: state.counter.number,
    // };
    return {};
}

function mapDispatch(dispatch) {
    // return {
    //     ...bindActionCreators({
    //         incrementAction: increment,
    //         decrementAction: decrement,
    //     }, dispatch),
    // };
    return {};
}


export {CurrencyContainer};