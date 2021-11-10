/* eslint-disable prettier/prettier */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import UserReducer from './UserReducer';
import SignupReducer from './SignupReducer';
// import ReviewReducer from './Review_reducer';
// import NetInfoRedux from './net_info';
// import TipsterReducer from './Tipster_reducer';
// import DashboardReducer from './Dashboard_reducer';
// import OnlineTipsterReducer from './OnlineTipstersReducer'
// import TypeReducer from './Type_Reducer'
// import OnlineDashboardReducer from './OnlineDashboardReducer'
// import VersionReducer from './VersionReducer'
const AppReducer = combineReducers({
    UserReducer,
    SignupReducer,
    //   NetInfoRedux,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    AppReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // composeEnhancers(applyMiddleware(logger)),
);

export default store;
