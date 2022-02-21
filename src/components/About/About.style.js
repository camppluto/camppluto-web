import styled from "styled-components"

export const AboutStyle = styled.section`
  padding: 120px 0 200px;
  background-color: ${({ theme }) => theme.colors.white};

  .content {
    display: flex;
    align-items: center;
  }

  .left {
    width: 50%;
    margin-right: 12px;
  }

  .right {
    margin-top: 80px;
    width: 50%;
    margin-left: 12px;
  }

  .img-wrapper {
    position: relative;
    border-radius: 12px;
    img {
      width: 100%;
      position: relative;
      z-index: 1;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.primaryLight};
      border-radius: 0 12px 12px 0;
      transform: translate(-25%, 15%);
    }
  }

  .title {
    padding-bottom: 24px;
    span {
      opacity: 0;
    }
  }

  h1 {
  }

  .text {
    color: ${({ theme }) => theme.colors.black};
    padding-bottom: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 80px 0;
    .left {
      margin-right: 8px;
      max-width: 544px;
    }

    .right {
      margin-left: 8px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 60px 0;
    .content {
      flex-direction: column-reverse;
      .left,
      .right {
        margin: 0;
        width: 100%;
      }
    }
  }
`
