import Head from "next/head"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <>
      <Head>
        <title>HOLYTEM | HOME</title>
        <meta name='description' content='HolyTemp' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
    </>
  )
}
export default Home
