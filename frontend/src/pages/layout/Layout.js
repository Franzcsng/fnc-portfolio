import './Layout.scss'
import { Outlet } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Header from './../../components/layout/header/Header.js'
import Footer from './../../components/layout/footer/Footer.js'

const Layout = () => {

    let [mode, setMode] = useState('')

    useEffect(()=>{
        const storedMode = localStorage.getItem('dark')
        storedMode === "true" ? setMode('dark') : setMode('')
    }, [])

    const toggleDarkMode = () =>{
        if(mode === '') {
            localStorage.setItem('dark', 'true')
            setMode('dark')
        }else{
            localStorage.setItem('dark', 'false')
            setMode('')
        }
    }
    
    return (
        <div className={`app-layout ${mode}`}>
            <Header toggleMode={toggleDarkMode} mode={mode}/>

            <div className='layout-main'>
                <Outlet/>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Layout