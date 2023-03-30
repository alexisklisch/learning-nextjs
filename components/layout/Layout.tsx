import { Header } from "@components/header/Header"

export function Layout ({ children }) {
  return <>
    <Header/>
    {children}
    <footer>Mi footer</footer>
  </>
}
