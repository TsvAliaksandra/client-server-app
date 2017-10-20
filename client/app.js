import React from 'react';
import ReactDOM from 'react-dom';
import RouterFile from './components/RouterFile';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootreducer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const App = () => (
    <MuiThemeProvider>
        <RouterFile />
    </MuiThemeProvider>
);
const store = createStore(
    rootReducer,
   composeWithDevTools(applyMiddleware(promise(), thunk)));

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('reactcontainer'));


