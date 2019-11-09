import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from 'redux-starter-kit';
import { Provider } from 'react-redux';
import createSagaMiddleare from 'redux-saga';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import sagas from './sagas';

import galleryReducer from './reducers/galleryReducer';


const sagaMiddleware = createSagaMiddleare();

const store = configureStore({
  reducer: galleryReducer,
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(sagas);

ReactDOM.render( <Provider store={store}>
                    <App/>
                 </Provider>
                 ,document.getElementById('root')
               );

serviceWorker.unregister();
