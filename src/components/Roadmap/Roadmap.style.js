import styled from "styled-components"

export const RoadmapStyle = styled.div`
  padding: 100px 0 300px;
  .title {
    display: flex;
    justify-content: center;

    span {
      opacity: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 80px 0 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 80px 0 300px;
  }
`
