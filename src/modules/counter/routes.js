import React from 'react';
import {CounterContainer} from "./containers/CounterContainer";

export function getRoutes() {
    return {
        retailPoints: {
            path: '/',
            index: true,
            exact: true,
            component: CounterContainer,
            nested: {
                nested: {
                    path: '/nested',
                    exact: true,
                    isLayer: true,
                    layout: () => (<div>Nested</div>),
                },
            },
        },
    };
}