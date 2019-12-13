import React from "react"

import Header from "../components/Header"
import { GlobalStyle } from "../styles/global"

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
