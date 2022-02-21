import styled from "styled-components"

export const FAQStyle = styled.section`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  padding: 120px 0;

  .title {
    span {
      opacity: 0;
    }
  }
  .faq-content {
    max-width: 830px;
    width: 100%;
    margin: 0 auto;
  }

  .Collapsible {
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  }

  .Collapsible__trigger {
    display: block;
    border-radius: 16px 16px 0 0;

    &.is-open {
      .icon {
        transform: rotate(180deg);
      }
    }
  }

  .Collapsible__contentInner {
    padding-bottom: 24px;
    font-size: ${({ theme }) => theme.titleSizes.h4};
  }

  .trigger-inner {
    position: relative;
    font-weight: 700;
    padding: 24px 40px 24px 0;
    cursor: pointer;

    .icon {
      position: absolute;
      top: 20px;
      right: 0;
      transition: 0.5s;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 80px 0;
  }
`
