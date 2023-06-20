import React from 'react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to next 13</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/about/team">Team</Link></li>
      </ul>
    </div>
  )
}
