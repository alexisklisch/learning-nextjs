// Exporto una función 'getServerSideProps'
/// 'context' me da algunos datos útiles como el id
export const getServerSideProps = async (context) => {
  // Extraigo id como hacía con router
  const { id } = context.params
  // Hago el fetch con toda la ruta
  const avo = await fetch(`http://localhost:3000/api/avo/${id}`)
  .then(res => res.json())
  .then(data => data.data)

  // Si no encontró un avo, lleva a página 404
  if(!avo) return { notFound: true }
  
  // Retorno un objeto que contiene "props" y a su vez la data
  return {
    props: {
      avo
    }
  }
}

// La info de la palta ahora llega por prop
function ProductItem({ avo }) {
  console.log(avo)
  return <>
    <h1>{avo?.name}</h1>
    <p>{avo?.attributes.description}</p>
  </>
}

export default ProductItem
