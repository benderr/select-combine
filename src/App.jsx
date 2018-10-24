import React from 'react';
import { Provider } from 'react-redux';
import ModulRouter from 'modul-ui-router';
import { Router } from 'react-router-dom';
import { NotFoundLayout } from './common/components/NotFoundLayout';
import { InternalLayout } from './common/components/InternalLayout';
import DefaultLayerLayout from './common/components/DefaultLayerLayout';
import { configureRedux } from './redux';
import CounterModule from './modules/counter/CounterModule';
import CurrencyModule from './modules/currency/CurrencyModule';

const modules = [CounterModule, CurrencyModule];
const { store, routes, history } = configureRedux({ modules, initState: {} });

export const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <ModulRouter
                defaultLayerLayout={DefaultLayerLayout}
                defaultLayout={InternalLayout}
                routes={routes}
                notFound={NotFoundLayout}
            />
        </Router>
    </Provider>
);