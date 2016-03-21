/*
    Focused
    Independent
    Reusable
    Small
    Testable
*/

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

import routes from './config/routes'

// var dotenv = require('dotenv')
// dotenv.config({path: '/.env'});

// var filename = '/.env';



// var text = fs.readFileSync('/.env', 'utf8');

// console.log(text)
// console.log(process.env.GH_BASIC_SECRET_ID)

render(
   <Router routes={routes} history={browserHistory}/>,
    document.getElementById('app')
);