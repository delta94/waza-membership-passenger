import { Redirect } from 'react-router-dom'
import { lazy } from 'react'

import { PrivateRoute } from '../routes/PrivateRoute'

const Passenger = lazy(() => import('../components/Passenger/Passenger'))
const Login = lazy(() => import('../components/Login/Login'))

export const routes = [
    {
        path: '/',
        customRoute: Redirect,
        to: '/p',
        exact: true,
    },
    {
        path: '/p',
        component: Passenger,
        customRoute: PrivateRoute,
    },
    {
        path: '/login',
        component: Login
    }
]