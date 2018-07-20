import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {AppContainer} from 'react-hot-loader'

import store, { history } from './store'
import App from './App'

import './mystyles.scss'

const target = document.getElementById('app')
render(
    <Provider store={store}>
        <div>
          <App history={history} />
        </div>
    </Provider>,
  target)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(
      <AppContainer>
        <Provider store={store}>
            <div>
              <NextApp history={history} />
            </div>
        </Provider>,
      </AppContainer>,
      target)
  })
}
