import React from 'react'
import ReactDom from 'react-dom'
import { DataLayer } from './DataLayer'
import reducer, { initialState } from './reducer'
import { createRoot } from 'react-dom/client';

import App from './App'

const root = createRoot(document.getElementById('root'))
root.render(
    <DataLayer initialState={initialState} reducer={reducer}>
       <App />
    </DataLayer>
);

