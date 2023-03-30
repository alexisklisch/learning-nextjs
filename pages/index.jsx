import Link from "next/link"

export const getStaticProps = async () => {
  const avos = await fetch(`https://learning-nextjs-coral-one.vercel.app/api/avo`)
  .then(res => res.json())
  .then(data => data.data)

  if(!avos) return { notFound: true }
  
  return {
    props: {
      avos
    },
    revalidate: 10
  }
}

function Home({avos}) {
  return (
    <>
      <h1>Paltitas</h1>
      <section style={{maxWidth: '512px', margin: '0 auto', display: 'grid', gap: '12px', gridTemplateColumns: '33.3% 33.4% 33.3%'}}>
        {avos?.map((avo) => {
          return (
            <Link key={avo.id} href={`/product/${avo.id}`}>
              <article>
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
