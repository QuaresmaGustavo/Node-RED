import { Outlet } from 'react-router-dom'
import Sidebar from './Components/Sidenav'
import './style/Home.css'

export default function Home() {

    return (
        <div id='home'>
            <Sidebar />
            <Outlet />
        </div>
    )
}