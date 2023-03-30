import { useRouter } from "next/router"
import { useState, useEffect } from "react"

function ProductItem() {
  const router = useRouter()
  const { id } = router.query
  const [avo, setAvo] = useState([])

  useEffect(() => {
    fetch(`/api/avo/${id}`)
      .then(res => res.json())
      .then(data => setAvo(data))
  },[])

  return <>
    <h1>{avo.data?.name}</h1>
    <p>{avo.data?.attributes.description}</p>
  </>
}

export default ProductItem
