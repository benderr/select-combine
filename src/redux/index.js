import {createBrowserHistory} from 'history'
import createSagaMiddleware from 'redux-saga';
import {configureRoutes} from "./routes";
import {configureStore} from "./store";
import {configureMiddlewares} from './middlewares';
import {configureReducers} from './reducers';
import {configureSagas} from "./sagas";

/**
 * Configure redux store and middlewares by ApplicationModule array
 * @param modules {[ApplicationModule]}
 * @param initState
 * @return {{store: *, routes: *, history: *}}
 */
export const configureRedux = ({modules, initState}) => {
    const history = createBrowserHistory();
    const sagaMiddleware = createSagaMiddleware();
    const routes = configureRoutes(modules);
    //const middleware = getMiddlewares(modules, routerMiddleware(history), sagaMiddleware);
    const middleware = configureMiddlewares(modules, sagaMiddleware);

    const store = configureStore(
        {
            middleware: middleware,
            reducers: configureReducers(modules),
            initState: initState,
            history,
        }
    );

    function runSagas() {
        const task = sagaMiddleware.run(configureSagas(modules));
        task.done.catch(error => {
            console.error(error);
            //logger.error('Ошибка в saga', error);
            runSagas();
            store.dispatch({type: '@@core/GLOBAL_SAGA_ERROR', error});
        });
    }

    runSagas();

    return {store, routes, history};
};