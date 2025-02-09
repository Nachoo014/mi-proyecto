import React from 'react'
import Style from './NavBar.module.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";


function NavBar() {

    const links = [
        {
            id: 1,
            href: "/Inicio",
            link: "Inicio",
        },
        {
            id: 2,
            href: "/Nosotros",
            link: "Nosotros",
        },
        {
            id: 3,
            href: "/Servicios",
            link: "Servicios",
        },
        {
            id: 4,
            href: "/Contacto",
            link: "Contacto",
        },

    ]



  return (
    <div className={Style.Nav}>
        <h1 className={Style.Logo}>Logo</h1>
        <div>
        {links.map(l =>((
            
            <Link className={Style.Link} key={l.id} to={l.href}>{l.link}</Link>
            
        )))}
        </div>
    </div>
  )
}

export default NavBar