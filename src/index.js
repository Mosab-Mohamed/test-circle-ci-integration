import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

const entry = document.getElementById('entry')

function hello() {
  return <h1>HELLO</h1>
}

ReactDOM.render(hello(), entry)
