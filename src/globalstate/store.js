import { createStore } from 'redux';
import reducer from './reducer';

const create=createStore(reducer)

export default create