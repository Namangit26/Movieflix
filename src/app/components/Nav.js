"use client"
import React from 'react'
import styles from "@/app/styles/navbar.module.css"
import {CgCloseR, CgMenu} from "react-icons/cg";
import Link from "next/link";
import {useState} from "react";

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    console.log("value " + openMenu)
  return (
    <>
    <nav className={styles.navbar}>
    
        <div className={openMenu ? `${styles.active}` : "" }>
            <div className={openMenu ? `${styles.app__navbarsmallscreen_overlay}` : "" }>
                <div className={openMenu ? `${styles.cntr}` : "" }>

                    <ul className={!openMenu ? `${styles.navbarList}` : "" } >
                        <li className={styles.navbarItem}>
                            <Link className={openMenu ? `${styles.navbarLink}` : "" } href="/"
                                onClick={() => setOpenMenu(false)}
                            >Home</Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={openMenu ? `${styles.navbarLink}` : "" }
                            href="/about"
                                onClick={() => setOpenMenu(false)}
                            >About</Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={openMenu ? `${styles.navbarLink}` : "" }
                                onClick={() => setOpenMenu(false)}
                                href="/movie">Movie</Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={openMenu ? `${styles.navbarLink}` : "" }
                                onClick={() => setOpenMenu(false)}
                                href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                    <div className={styles['mobile-navbar-btn']}>
                        <CgMenu
                            name="menu-outline"
                            className={styles['mobile-nav-icon']}
                            onClick={() => setOpenMenu(true)}
                        />
                        <CgCloseR 
                            name="close-outline"
                            className={`${styles['mobile-nav-icon']} ${styles['close-outline']}`}
                            onClick={() => setOpenMenu(false)}
                        />
                    </div>
                </div>
            </div>
    </nav>

</>
  )
}

export default Nav