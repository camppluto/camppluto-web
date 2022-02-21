import styled, { keyframes } from "styled-components"

const barAnimation = keyframes`
  0% {
    stroke-dashoffset: 1005px;
  }
  100% {
    stroke-dashoffset: calc(1005px - (1050px * 90) / 100);
  }
`
const barAnimationMedia = keyframes`
  0% {
    stroke-dashoffset: 700px;
  }
  100% {
    stroke-dashoffset: calc(700px - (700px * 90) / 100);
  }
`

export const LoaderStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: visible;
  opacity: 1;
  transition: .5s;
  background-color: ${({ theme }) => theme.colors.white};

  &.hide-loader {
    opacity: 0;
    visibility: hidden;
  }

  .bar {
    display: inline-block;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    position: relative;
    //box-shadow: -3px -3px 7px #ffffffb2, 3px 3px 5px rgba(94, 104, 121, 0.945);
    overflow: hidden;
    margin: 50px;
    
  }

  svg {
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotate(-90deg);
  }

  svg circle {
    position: absolute;
    transform: scale(0.939);
    transform-origin: center;
    fill: none;
    stroke-width: 1px;
    stroke-dasharray: 1005px;
    stroke: ${({ theme }) => theme.colors.primaryLight};
    
    &.filling {
         animation: ${barAnimation} 3s ease-in-out forwards;
      stroke: ${({ theme }) => theme.colors.primary};
      stroke-width: 4px;
    }
    /* stroke-dashoffset: 630px; */
  }
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 200px;
  width: 200px;
}

@media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
  .bar {
    width: 200px;
    height: 200px;
  }
  .logo {
    height: 137px;
    width: 137px;
  }
  svg circle {
    stroke-dasharray: 700px;
    &.filling {
      animation: ${barAnimationMedia} 3s ease-in-out forwards;
    }
  }
`
