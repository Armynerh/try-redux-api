import taskRuducer from './taskReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    tasks: taskRuducer
})

export default taskRuducer;