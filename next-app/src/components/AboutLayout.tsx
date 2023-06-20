import Header from "./Header"
import "./Layout.module.css"
import Nav from "./Nav"

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className="AboutLayout">
      <Header/>
      <Nav/>
      {children}</section>
  }