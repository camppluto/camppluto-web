import { useEffect, useRef, useState } from "react"
import { TimelineStyle } from "./TimeLine.style"

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState(false)
  const [message2, setMessage2] = useState(false)
  const [message3, setMessage3] = useState(false)
  const [message4, setMessage4] = useState(false)
  const [message5, setMessage5] = useState(false)
  const [message6, setMessage6] = useState(false)
  const [message7, setMessage7] = useState(false)
  const [message8, setMessage8] = useState(false)

  const timeline1 = useRef(null)
  const timeline2 = useRef(null)
  const timeline3 = useRef(null)
  const timeline4 = useRef(null)
  const timeline5 = useRef(null)
  const timeline6 = useRef(null)
  const timeline7 = useRef(null)
  const timeline8 = useRef(null)
  const circle1 = useRef(null)
  const circle2 = useRef(null)
  const circle3 = useRef(null)
  const circle4 = useRef(null)
  const circle5 = useRef(null)
  const circle6 = useRef(null)
  const circle7 = useRef(null)
  const circle8 = useRef(null)

  const someCallback = () => {
    setMessage1(true)
  }

  const someCallback2 = () => {
    setMessage2(true)
  }

  const someCallback3 = () => {
    setMessage3(true)
  }

  const someCallback4 = () => {
    setMessage4(true)
  }

  const someCallback5 = () => {
    setMessage5(true)
  }

  const someCallback6 = () => {
    setMessage6(true)
  }

  const someCallback7 = () => {
    setMessage7(true)
  }

  const someCallback8 = () => {
    setMessage8(true)
  }

  useEffect(() => {
    setObserver(timeline1.current)
    setObserver(timeline2.current)
    setObserver(timeline3.current)
    setObserver(timeline4.current)
    setObserver(timeline5.current)
    setObserver(timeline6.current)
    setObserver(timeline7.current)
    setObserver(timeline8.current)
    setObserver(circle1.current, someCallback)
    setObserver(circle2.current, someCallback2)
    setObserver(circle3.current, someCallback3)
    setObserver(circle4.current, someCallback4)
    setObserver(circle5.current, someCallback5)
    setObserver(circle6.current, someCallback6)
    setObserver(circle7.current, someCallback7)
    setObserver(circle8.current, someCallback8)
  }, [])

  return (
    <TimelineStyle>
      <div id="timeline1" ref={timeline1} className="timeline timeline1" />
      <div className="circleWrapper">
        <div
          id="circle1"
          ref={circle1}
          className={`circle ${message1 ? "big" : ""}`}
        />
        <div className={`message left ${message1 ? "fade-in" : ""}`}>
          <h3 className="color-primary">20%</h3>
          <p>5 x $1,000 GIVEAWAY FOR HOLDERS</p>
          <p>5 x YETI COOLER GIVEAWAY</p>
        </div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline timeline2" />
      <div className="circleWrapper">
        <div
          id="circle2"
          ref={circle2}
          className={`circle ${message2 ? "big" : ""}`}
        />
        <div className={`message right ${message2 ? "fade-in" : ""}`}>
          <h3 className="color-primary">50%</h3>
          <p>TRACKER OFF ROAD</p>
          <p>SIDE-BY-SIDE GIVEAWAY</p>
        </div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline timeline3" />
      <div className="circleWrapper">
        <div
          id="circle3"
          ref={circle3}
          className={`circle ${message3 ? "big" : ""}`}
        />
        <div className={`message left ${message3 ? "fade-in" : ""}`}>
          <h3 className="color-primary">100%</h3>
          <p>
            THE CAMP PLUTO TEAM WILL BEGIN THE SEARCH FOR A CAMPGROUND THE
            COMMUNITY WILL LOVE.
          </p>
        </div>
      </div>
      <div id="timeline4" ref={timeline4} className="timeline timeline4" />
      <div className="circleWrapper">
        <div
          id="circle4"
          ref={circle4}
          className={`circle ${message4 ? "big" : ""}`}
        />
        <div className={`message right ${message4 ? "fade-in" : ""}`}>
          <h3 className="color-primary">4 MONTHS LATER...</h3>
          <p>
            CAMP PLUTO HOLDERS WILL CONFIRM THEY ARE HOLDERS AND VOTE ON WHAT
            PIECE OF LAND THEY LIKE BEST.
          </p>
        </div>
      </div>
      <div id="timeline5" ref={timeline5} className="timeline timeline5" />
      <div className="circleWrapper">
        <div
          id="circle5"
          ref={circle5}
          className={`circle ${message5 ? "big" : ""}`}
        />
        <div className={`message left ${message5 ? "fade-in" : ""}`}>
          <h3 className="color-primary">5 MONTHS LATER...</h3>
          <p>
            CAMP PLUTO WILL ACQUIRE THE CAMPGROUND AND BEGIN DEVELOPMENT OF
            BASIC NECESSITIES.
          </p>
        </div>
      </div>
      <div id="timeline6" ref={timeline6} className="timeline timeline6" />
      <div className="circleWrapper">
        <div
          id="circle6"
          ref={circle6}
          className={`circle ${message6 ? "big" : ""}`}
        />
        <div className={`message right ${message6 ? "fade-in" : ""}`}>
          <h3 className="color-primary">6 MONTHS LATER...</h3>
          <p>
            CAMP PLUTO HOLDERS WILL LEARN WHERE THEIR INDIVIDUAL “CAMPSITES” ARE
            LOCATED ON THE LAND
          </p>
        </div>
      </div>
      <div id="timeline7" ref={timeline7} className="timeline timeline7" />
      <div className="circleWrapper">
        <div
          id="circle7"
          ref={circle7}
          className={`circle ${message7 ? "big" : ""}`}
        />
        <div className={`message left ${message7 ? "fade-in" : ""}`}>
          <h3 className="color-primary">7 MONTHS LATER...</h3>
          <p>CAMP PLUTO OFFICIALLY OPEN!</p>
        </div>
      </div>
      <div id="timeline8" ref={timeline8} className="timeline timeline8" />
      <div className="circleWrapper">
        <div
          id="circle8"
          ref={circle8}
          className={`circle ${message8 ? "big" : ""}`}
        />
        <div className={`message right ${message8 ? "fade-in" : ""}`}>
          <h3 className="color-primary">1 YEAR AND BEHIND</h3>
          <p>
            CAMP PLUTO WILL EXPAND TO MULTIPLE LOCATIONS THROUGHOUT THE USA AND
            CONTINUE BUILDING OUR NETWORK OF MEMBERS
          </p>
        </div>
      </div>
    </TimelineStyle>
  )
}

export default Timeline
