import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Try from './index'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('box'),
  )
}

render(Try)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./index', () => {
    // if you are using harmony modules ({modules:false})
    render(Try)
    // in all other cases - re-require App manually
    render(require('./index'))
  })
}


// ReactDOM.render(
//   <AppContainer>
//     <Try />
//   </AppContainer>
//   ,document.getElementById('box')
// )
//
//
//
// if (module.hot) {
//   module.hot.accept(() => {
//     ReactDom.render(
//       <AppContainer>
//         <Try />
//       </AppContainer>,
//       document.getElementById('box')
//     )
//   })
// }
