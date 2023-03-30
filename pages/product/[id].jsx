import { useRouter } from "next/router"

function ProductItem() {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>El id es {id}</div>
  )
}

export default ProductItem
