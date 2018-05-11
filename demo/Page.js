import React, {Component} from 'react';

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {test: 'Hello 1'};

    }

    componentDidMount() {

    }


    render() {
        return (<div>{this.state.test}</div>);
    }
};