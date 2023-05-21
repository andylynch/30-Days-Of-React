// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document


// JSX element, app
const app = (
  <div className='app'>
    Hello, react
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)