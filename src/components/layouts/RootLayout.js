import React, { useState, useEffect, useRef } from 'react'
import TopHeader from '../common/TopHeader';
import Header from '../common/Header';
import Navbar from '../common/Navbar';
import NavSidebar from '../common/NavSidebar';
import CartSidebar from '../common/cart/CartSidebar';
import { Outlet } from 'react-router-dom';

import Footer from '../common/Footer';
import Copyright from '../common/Copyright';

const RootLayout = () => {
    let [navSidebarShow, setNavSidebarShow] = useState(false)
    let [cartSidebarShow, setCartSidebarShow] = useState(false)

    useEffect(() => {
        function resizeWith(e) {
            if (window.innerWidth < 1024) {
                setNavSidebarShow(true);
            } else {
                setNavSidebarShow(false);
            }
        }
        resizeWith();

        window.addEventListener("resize", resizeWith)
    }, [])

    let navRef = useRef()
    let cartRef = useRef()

    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (navRef.current.contains(e.target)) {
                setNavSidebarShow(true);
            } else {
                setNavSidebarShow(false);
            }
        });

        document.body.addEventListener("click", (e) => {
            if (cartRef.current.contains(e.target)) {
                setCartSidebarShow(true);
            } else {
                setCartSidebarShow(false);
            }
        });
    }, [])

    return (
        <>
            <TopHeader />
            <Header cartRef={cartRef} navRef={navRef} />
            <Navbar />
            {navSidebarShow && <NavSidebar navRef={navRef} />}
            {cartSidebarShow && <CartSidebar cartRef={cartRef} />}
            <Outlet />

            <Footer />
            <Copyright />
        </>
    )
}

export default RootLayout