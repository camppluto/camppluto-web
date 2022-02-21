import { AboutStyle } from "./About.style"
import AboutImg from "../../assets/about/about.png"
import AboutImgWebp from "../../assets/about/about.webp"

import { Title } from "../Animations"
import { forwardRef, useEffect, useState } from "react"
import { Fade } from "react-awesome-reveal"

const HaveIdea = forwardRef(({ onScreen }, ref) => {
  const title = "Have an Idea?"
  const [animationClass, setAnimationClass] = useState("")
  const showNextAnimation = () => {
    if (!animationClass) {
      setAnimationClass("fade-in")
    }
  }

  return (
    <AboutStyle ref={ref}>
      <div className="container">
        <div className="content">
          <div className="left" onAnimationEnd={showNextAnimation}>
            <div className="img-wrapper">
              <picture>
                <source srcSet={AboutImgWebp} type="image/webp" />
                <img src={AboutImg} alt="camp-pluto" />
              </picture>
            </div>
          </div>
          <div className="right">
            <Title className="title" as='h2' startAnim={onScreen}>
              <span>About <strong className='color-primary'>Camp Pluto</strong></span>
            </Title>
            <Fade triggerOnce cascade direction={'down'} fraction={1} duration={800}>
              <p className="text">
                Camp Pluto is a modern way to enjoy nature. Introducing the
                world's first member-only private campground where memberships are
                purchased on the blockchain as NFTs.
              </p>
              <p className="text">
                Each of the 4,500 Camp Pluto NFTs will allow for governance,
                access to a community-selected piece of physical land in the
                United States, and access to future projects. Camp Pluto NFTs will
                be paramount to the future of nature conservation.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </AboutStyle>
  )
})

export default HaveIdea
