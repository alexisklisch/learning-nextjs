import Link from 'next/link'
import { Btn } from "@components/btn/Btn";

function About() {
  const btnHandler = () => {
    alert('Ojo, que la vida es una lenteja')
  }

  return <>
    <Link href='/' >Inicio</Link>
    <Btn onClick={btnHandler} />
  </>
}

export default About