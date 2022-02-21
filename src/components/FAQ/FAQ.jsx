import React, { forwardRef } from "react"
import { FAQStyle } from "./FAQ.style"
import Collapsible from "react-collapsible"
import { Icon } from "../UIKit"
import { Title } from "../Animations"
import { Fade } from "react-awesome-reveal"

const data = [
  {
    question: "WHAT WILL BE THE USE OF THE NFT MINT PROCEEDS?",
    answer:
      "90% of proceeds will be used for the acquisition and development of the land that will be available for holders to use. "
  },
  {
    question: "WHERE WILL THE LAND BE?",
    answer:
      "The land will be in the United States. A list of several possible locations will be curated by team members where holders will then vote on what they like best. Possible locations include but are not limited to Missouri, New Mexico, Wyoming, Idaho, Arkansas, Alabama, Alaska and several other states. Real estate market conditions and mint price will affect this."
  },
  {
    question: "HOW BIG WILL EACH FRACTIONALIZED “CAMPSITE” BE?",
    answer:
      "Each of the 4,500 “campsites” will likely be 30’ x 30’. We hope to acquire a piece of land large enough to where the “campsites” only take up around 40% of the land and the rest of it can be used for hiking, exploring, and other community use."
  },
  {
    question: "DO NFT HOLDERS OWN THE LAND?",
    answer:
      "No. They have a membership to access to the land, specifically their “campsite” as well as the community portion of the land. Think of it similar to having a pass to a National or State Park."
  },
  {
    question: "WHY IS “CAMPSITE” IN QUOTATION MARKS?",
    answer:
      "We do this to be transparent with our community. We want to recognize that we are not providing 4,500 fully set up campsites with fire pits, cleared areas for tents, etc. Instead, we are allowing you access to a roughly 30’ x 30’ section of the land where you can turn it into whatever you imagine a campsite may look like! Feel free to use your imagination here (as long as it is within community guidelines and US Law). It is worth noting however, if proceeds are great enough, camp amenities can be added for all holders!"
  }
]
const FAQ = forwardRef(({ onScreen }, ref) => {
  return (
    <FAQStyle ref={ref}>
      <div className="container">
        <div className="faq-content">
          <Title className="title" as="h2" startAnim={onScreen}>
            <span>FAQ</span>
          </Title>
          {data.map((q, i) => {
            return (
              <Collapsible
                key={i}
                transitionTime={500}
                trigger={
                  <Fade triggerOnce cascade direction={"down"} fraction={.8} duration={800}>
                    <div className="trigger-inner">
                      <h4 className="h4">{q.question}</h4>
                      <Icon name="arrow-down" />
                    </div>
                  </Fade>
                }
              >
                <p>{q.answer}</p>
              </Collapsible>
            )
          })}
        </div>
      </div>
    </FAQStyle>
  )
})

export default FAQ
