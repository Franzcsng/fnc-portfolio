import 'Layout.scss'
import { Outlet } from 'react-router-dom'
import Header from '../../components/layout/header/Header.js'
import Footer from '../../components/layout/header/Footer.js'

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout