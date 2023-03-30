import Link from "next/link"
import { useState, useEffect } from "react"

function Home() {
  const [avos, setAvos] = useState([])
  useEffect(() => {
    fetch("/api/avo")
      .then((res) => res.json())
      .then((data) => setAvos(data))
  }, [])
  return (
    <>
      <h1>Paltitas</h1>
      <section style={{maxWidth: '512px', margin: '0 auto', display: 'grid', gap: '12px', gridTemplateColumns: '33.3% 33.4% 33.3%'}}>
        {avos.data?.map((avo) => {
          return (
            <Link href={`/product/${avo.id}`}>
              <article key={avo.id}>
                <h3>{avo.name}</h3>
                <span>{avo.sku}</span>
                <h2>Precio: {avo.price}</h2>
              </article>
            </Link>
          )
        })}
      </section>
    </>
  )
}

export default Home
