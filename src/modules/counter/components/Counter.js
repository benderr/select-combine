import React from 'react';
import PropTypes from 'prop-types';

/**
 * Dump component
 */
class Counter extends React.Component {
    static propTypes = {
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        number: PropTypes.number,
    };

    render() {
        const {number} = this.props;
        return (
            <div>
                <span>{number}</span>
                <button className="button" onClick={this.handleIncrement}>+</button>
                <button className="button" onClick={this.handleDecrement}>-</button>
            </div>
        );
    }


    handleIncrement = () => {
        this.props.increment();
    };

    handleDecrement = () => {
        this.props.decrement();
    };

}

export {Counter};