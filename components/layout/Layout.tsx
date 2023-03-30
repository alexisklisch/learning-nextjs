import { Header } from "@components/header/Header"

function Layout ({ children }) {
  return <>
    <Header/>
    {children}
    <footer>Mi footer</footer>
  </>
}


export default Layout
