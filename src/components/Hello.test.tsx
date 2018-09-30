import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import Hello from './Hello';

enzyme.configure({adapter: new Adapter()});

test('renders the correct text when no enthusiasm level is given', () => {
    const hello = enzyme.shallow(<Hello name="Daniel" />);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

test('renders the correct text with an explicit enthusiasm of 1', () => {
    const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={1} />);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

test('renders the correct text with an explicit enthusiasm level of 5', () => {
    const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={5} />);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!');
});

test('throws when the enthusiasm level is 0', () => {
    expect(() => {
        enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={0} />);
    }).toThrow();
});

test('throws when the enthusiasm level is negative', () => {
    expect(() => {
        enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={-1} />);
    }).toThrow();
});
