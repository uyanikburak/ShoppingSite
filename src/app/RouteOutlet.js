import { useEffect } from 'react';
import { BrowserRouter, Link, Outlet, useNavigate } from 'react-router-dom'
import SkeletonPage from './SkeletonPage';
import { Provider } from 'react';
export default function RouteOutlet() {

    let navigate = useNavigate();


    return (
        <div>
            <Outlet />
        </div>
    )
}