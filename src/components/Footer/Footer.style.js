import styled from "styled-components"

export const FooterStyle = styled.footer`
  text-align: center;
  padding: 24px 0;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  .social {
    display: flex;
    justify-content: center;
    padding-bottom: 16px;

    li {
      margin: 0 8px;
    }
  }
`
