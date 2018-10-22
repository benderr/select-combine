/* eslint-env jest/globals */
import React from 'react';
import { CurrencyView } from '../CurrencyView';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(<CurrencyView loading={false} update={() => {}}/>).toJSON();
    expect(tree).toMatchSnapshot();
});