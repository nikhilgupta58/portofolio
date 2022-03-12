import React from "react"
import { Helmet } from "react-helmet"
import "./layout.css"
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Helmet>
        <title>Nikhil Gupta</title>
      </Helmet>
      {children}
    </>
  )
}