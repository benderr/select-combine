import React from 'react';
import {Provider} from 'react-redux';
import NotFoundLayout from './common/components/NotFoundLayout';
import InternalLayout from './common/components/InternalLayout';
import DefaultLayerLayout from './common/components/DefaultLayerLayout';
import ModulRouter from 'modul-ui-router';
import {configureRedux} from '../src/redux';
import CounterModule from './modules/counter/CounterModule';
import CurrencyModule from './modules/currency/CurrencyModule';
import {Router} from 'react-router-dom';

const modules = [CounterModule, CurrencyModule];
const {store, routes, history} = configureRedux({modules, initState: {}});

export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <ModulRouter defaultLayerLayout={DefaultLayerLayout}
                        defaultLayout={InternalLayout}
                        routes={routes}
                        notFound={NotFoundLayout} />
                </Router>
            </Provider>
        );
    }
}
