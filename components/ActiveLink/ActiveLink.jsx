import Link from 'next/link'
import React from 'react'

export const ActiveLink = ({ children, urlLink }) => {

  return (
    <Link href={urlLink}>
      <a href={urlLink}>{children}</a>
    </Link>
  )
}
