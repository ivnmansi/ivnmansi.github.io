import Nav from './Nav'
import { Outlet } from 'react-router-dom'

export function PageLayout() {
    return (
        <>
            <Nav />
            <div className="content">
                <Outlet />
            </div>
            <footer>
                Made with <i className="fa-brands fa-react"></i> React 
            </footer>
        </>
    )
}