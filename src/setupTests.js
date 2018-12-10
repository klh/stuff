// Adding enzyme to do proper smoke test instead of basic unit test (this is after all visual Components)
// setup file
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// create better and more readable jest/enzyme assertions
import 'jest-enzyme';

configure({adapter: new Adapter()});
