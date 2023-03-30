import Link from "next/link";
import style from './Footer.module.css'

export function Footer() {
  return <>
    <footer className={style.footer}>
      <Link className={style.a} href='/about'>Sobre nosotros</Link>
    </footer>
  </>
}