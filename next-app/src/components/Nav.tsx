import React from 'react'
import navStyles from "../components/Nav.module.css"
import Link from 'next/link'
export default function Nav() {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>
    </nav>
  )
}
