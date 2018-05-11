import React from 'react';
import PropTypes from 'prop-types';

export class CurrencyView extends React.Component {
    static propTypes = {
        value: PropTypes.number,
        pair: PropTypes.string,
        loading: PropTypes.bool.isRequired,
        update: PropTypes.func.isRequired,
    };

    render() {
        const {value, pair, loading} = this.props;
        if (loading) {
            return (<div>Loading...</div>);
        }

        return (
            <div className="form">
                <div className="form_group">
                    <div>VALUE: {value}</div>
                    <div>PAIR: {pair}</div>
                    <button className="button" onClick={this.handleUpdate}>+</button>
                </div>
            </div>
        );
    }


    handleUpdate = () => {
        this.props.update();
    };
}