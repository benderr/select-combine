import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCurrencyRate} from "../actions";
import {CurrencyView} from "../components/CurrencyView";

import PropTypes from "prop-types";

@connect(mapState, mapDispatch)
class CurrencyContainer extends React.Component {

    static propTypes = {
        rate: PropTypes.number,
        error: PropTypes.string,
        loading: PropTypes.bool,
        pair: PropTypes.string,
        fetchRate: PropTypes.func.isRequired,
    };

    render() {
        const {rate, error, loading, pair} = this.props;
        return (
            <div className="main">
                <div className="widget_block">
                    <CurrencyView loading={loading}
                                  update={this.handleSelectCurrencyPair}
                                  pair={pair}
                                  error={error}
                                  rate={rate}/>
                </div>
            </div>
        );
    }

    handleSelectCurrencyPair = ({currencyPair}) => {
        this.props.fetchRate({currencyPair});
    }
}

function mapState(state) {
    return {
        rate: state.currency.rate,
        error: state.currency.error,
        loading: state.currency.loading,
        pair: state.currency.pair,
    };
}

function mapDispatch(dispatch) {
    return {
        ...bindActionCreators({
            fetchRate: fetchCurrencyRate,
        }, dispatch),
    };
}


export {CurrencyContainer};