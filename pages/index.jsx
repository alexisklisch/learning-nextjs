import Link from "next/link";

function Home() {
  return (
    <>
      <div>Home</div>
      <footer>
        <Link href='/about' prefetch={false}>Acerca de nosotros</Link>
      </footer>
    </>
  )
}

export default Home;
