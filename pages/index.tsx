import { ReactElement, useEffect } from 'react'
import Router from 'next/router'

export default function Home(): ReactElement {
  const user = {
    id: null,
  }
  useEffect(() => {
    if (!user.id) {
      Router.replace('/login')
    }
  }, [user.id])
  return <></>
}
