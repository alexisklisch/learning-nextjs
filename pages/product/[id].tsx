export const getStaticPaths = async (context) => {
  const avo = await fetch(`https://learning-nextjs-coral-one.vercel.app/api/avo`)
  .then(res => res.json())
  .then(data => data.data)

  const paths = avo.map(product => ({
    params: {
      id: product.id
    }
  }))
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params}) => {
  const { id } = params

  const avo = await fetch(`https://learning-nextjs-coral-one.vercel.app/api/avo/${id}`)
  .then(res => res.json())
  .then(data => data.data)

  return {
    props: {
      avo
    }
  }
}

function ProductItem({ avo }) {
  return <>
    <h1>{avo?.name}</h1>
    <p>{avo?.attributes.description}</p>
  </>
}

export default ProductItem
