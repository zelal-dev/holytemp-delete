import styled from "@emotion/styled"
import Head from "next/head"
import Achievements from "../components/Achievements"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Introduction from "../components/Introduction"
import MileStone from "../components/Milestones"
import Projects from "../components/Projects"
import OurVideo from "../components/Video"

const MainWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
`
const Home = () => {
  return (
    <MainWrapper>
      <Head>
        <title>HOLYTEM | HOME</title>
        <meta name='description' content='HolyTemp' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeroSection />
      <Introduction />
      <MileStone />
      <OurVideo />
      <Achievements />
      <Projects />
      <ContactUs />
      <Footer />
    </MainWrapper>
  )
}
export default Home
