import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../ActiveLink/ActiveLink'
import styles from './navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ActiveLink urlLink={'/'}>Home</ActiveLink>
      <ActiveLink urlLink={'/number-generator'}>Number Generator</ActiveLink>
    </nav>
  )
}
