import React from 'react';
import 'babel-polyfill';
import {Provider} from 'react-redux';
import NotFoundLayout from './common/components/NotFoundLayout';
import InternalLayout from './common/components/InternalLayout';
import DefaultLayerLayout from './common/components/DefaultLayerLayout';
import ModulRouter from 'modul-ui-router';
import {configureRedux} from '../src/redux';
import CounterModule from './modules/counter/CounterModule';
import {Router} from 'react-router-dom';

const modules = [CounterModule];
const {store, routes, history} = configureRedux({modules, initState: {}});


// const routeWrappers = [(route, props) => {
//     // if (!props.allowAnonymous)
//     //     route = PrivateRoute(route);
//     return route;
// }];


export class AppRedux extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <ModulRouter defaultLayerLayout={DefaultLayerLayout}
                                 defaultLayout={InternalLayout}
                                 routes={routes}
                                 notFound={NotFoundLayout}/>
                </Router>
            </Provider>
        );
    }
}
