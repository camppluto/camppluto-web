import styled from "styled-components"

export const TimelineStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;

  .timeline {
    height: 230px;
    width: 6px;
    background-color: #e5e5e5;

    &.timeline1 {
      border-radius: 4px 4px 0 0;
      height: 110px;
    }

    &.timeline2 {
      height: 180px;
    }

    &.timeline8 {
      height: 160px;
    }
  }

  .circle {
    width: 21px;
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 50%;
    background-color: #e5e5e5;
    position: relative;
    //transition: .3s;

    &:before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      transition: 0.2s;
    }

    &:after {
      content: "";
      width: 13px;
      height: 13px;
      background: #fff;
      border-radius: 50%;
      z-index: 1;
    }

    &.big {
      border-color: ${({ theme }) => theme.colors.primary};

      &:before {
        height: 33px;
        width: 33px;
        background-color: ${({ theme }) => theme.colors.primary};
      }
      &:after {
        width: 21px;
        height: 21px;
      }
    }
  }

  .circleWrapper {
    position: relative;
  }

  .message {
    position: absolute;
    top: 20%;
    min-width: 450px;
    font-weight: bold;
    opacity: 0;

    &.left {
      margin-left: 80px;
      left: 50%;
    }

    &.right {
      margin-right: 80px;
      right: 50%;
      text-align: right;
    }

    h3 {
      padding-bottom: 16px;
    }
    p {
      padding-bottom: 16px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    .message {
      min-width: 400px;

      &.left {
        margin-left: 60px;
      }

      &.right {
        margin-right: 60px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    .message {
      min-width: 230px;

      &.left {
        margin-left: 45px;
      }

      &.right {
        margin-right: 45px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    align-items: flex-start;
    padding-left: 8px;

    .circle {
      transform: translateX(-8px) !important;
    }
    .message {
      min-width: 260px;
      top: 0;

      &.left {
        margin-left: 28px;
        left: 0;
      }

      &.right {
        margin-right: 0;
        margin-left: 28px;
        left: 0;
        right: initial;
        text-align: left;
      }
    }
  }
`
