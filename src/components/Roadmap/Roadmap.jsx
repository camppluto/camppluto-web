import React, { forwardRef, useState } from "react"
import { theme } from "../../styles/global/theme"
import { RoadmapStyle } from "./Roadmap.style"
import Timeline from "../TimeLine/TimeLine"
import TimelineObserver from "react-timeline-animation"
import { Title } from "../Animations"

const Roadmap = forwardRef(({ onScreen }, ref) => {
  const onCallback = e => {
    console.log(e)
  }
  return (
    <RoadmapStyle ref={ref}>
      <div className="container">
        <div className="content">
          <Title className="title" as='h2' startAnim={onScreen}>
            <span>Roadmap</span>
          </Title>
          <TimelineObserver
            initialColor={theme.colors.black}
            fillColor={theme.colors.primary}
            handleObserve={setObserver => {
              return (
                <Timeline
                  callback={onCallback}
                  className="timeline"
                  setObserver={setObserver}
                />
              )
            }}
          />
        </div>
      </div>
    </RoadmapStyle>
  )
})

export default Roadmap
