import style from './Header.module.css'

export function Header() {
  return (
    <header className={style.header}>
      <figure className={style.figure}>
        <div className={style.circle} />
        <h2 className={style.h2}>Proyectito <span>Next</span></h2>
      </figure>
    </header>
  )
}
