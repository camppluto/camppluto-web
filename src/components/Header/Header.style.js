import styled from "styled-components"

export const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

  &.sticky {
    transition: box-shadow 0.3s;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.15);
  }

  .container,
  .header-content {
    height: 100%;
  }

  .hamburger {
    display: none;
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo-wrapper,
  .social {
    flex: 1;
  }

  .logo {
    max-width: 130px;
    display: block;

    img {
      width: 100%;
      display: block;
    }
  }

  .header-nav {
    flex: 2;
    .header-nav-inner {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .header-nav-list {
      display: flex;

      > li {
        cursor: pointer;
        font-weight: 700;
        line-height: 1;
        margin-right: 24px;
        font-size: ${({ theme }) => theme.fontSizes.md};
        position: relative;
        &:last-child {
          margin-right: 0px;
        }
        
        &:after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          height: 2px;
          width: 100%;
          background: transparent;
          transition: .3s;
        }
        
        &:hover {
          &:after {
            background: ${({ theme }) => theme.colors.black};
          }
        }
      }
    }

    .copyright {
      display: none;
    }
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    li {
      margin-right: 12px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .social-btn {
    height: 40px;
    width: 40px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    .icon {
      path {
        transition: 0.5s;
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.black};

      .icon {
        path {
          fill: ${({ theme }) => theme.colors.white};
        }
      }
    }
  }

  .social-mobile {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    .hamburger {
      margin-left: 20px;
      display: inline-block;
      cursor: pointer;
    }

    &.open {
      .header-nav {
        height: calc(100% - 80px);
      }
    }

    .header-nav {
      position: fixed;
      top: 80px;
      right: 0;
      bottom: 0;
      left: 0;
      overflow-y: auto;
      z-index: 100;
      height: 0;
      transition: height 0.5s;
      background-color: ${({ theme }) => theme.colors.white};

      .header-nav-inner {
        flex-direction: column;
        align-items: inherit;
        justify-content: space-between;
        height: calc(100vh - 80px);
        padding-top: 120px;
      }

      .header-nav-list {
        flex-direction: column;
        padding: 0 20px;
        align-items: flex-start;

        > li {
          padding-bottom: 24px;
          margin-right: 0;
          font-size: ${({ theme }) => theme.titleSizesSM.h2};
          width: 100%;
          border-bottom: 1px solid ${({ theme }) => theme.colors.white};

          &:not(:first-child) {
            padding-top: 40px;
          }
        }
      }

      .copyright {
        display: block;
        text-align: center;
        padding: 24px 20px;
        font-size: ${({ theme }) => theme.fontSizes.md};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .header-nav {
      .header-nav-inner {
        padding-top: 100px;
      }
      .header-nav-list {
        > li {
          padding-bottom: 24px;
          font-size: ${({ theme }) => theme.titleSizesXS.h2};
          &:not(:first-child) {
            padding-top: 24px;
          }
        }
      }
    }

    .social-desktop {
      display: none;
    }

    .social-mobile {
      display: block;
      justify-content: center;
      padding: 16px;
    }
  }
`
