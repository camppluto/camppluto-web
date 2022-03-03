import { useEffect, useState } from "react"
import { HeaderStyle } from "./Header.style"
import Logo from "../../assets/logo.svg"
import { Button, Icon } from "../UIKit"
import { useLockedBody } from "../../hooks/useLockedBody"
import { navList } from "./config"

const Header = ({ onLinkClick }) => {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const [locked, setLocked] = useLockedBody()

  useEffect(() => {
    if (drawerOpened) {
      document.body.classList.add("overflow-hidden")
    }
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [drawerOpened])

  const handleDrawerToggle = () => {
    setDrawerOpened(!drawerOpened)
    setLocked(!locked)
  }

  const handleMenuLinkClick = to => {
    if (drawerOpened) {
      setDrawerOpened(false)
      setLocked(false)
    }
    onLinkClick(to)
  }
  return (
    <HeaderStyle className={drawerOpened ? "open" : ""}>
      <div className="container">
        <div className="header-content">
          <div className="logo-wrapper">
            <a className="logo" href={"#"}>
              <img src={Logo} alt="Camp Pluto" />
            </a>
          </div>

          <nav className="header-nav">
            <div className="header-nav-inner">
              <ul className="header-nav-list">
                {navList.map(({ to, title }) => {
                  return (
                    <li key={to} onClick={() => handleMenuLinkClick(to)}>
                      {title}
                    </li>
                  )
                })}
              </ul>
              <div className="social-mobile">
                <ul className="social">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/camp_pluto"
                      rel="noreferrer"
                      className="social-btn"
                    >
                      <Icon name="instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://twitter.com/camp_pluto"
                      rel="noreferrer"
                      className="social-btn"
                    >
                      <Icon name="twitter" />
                    </a>
                  </li>
                  <li>
                    <Button
                      target="_blank"
                      rel="noreferrer"
                      href="https://discord.gg/22NkvSgwPV"
                    >
                      DISCORD
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <ul className="social social-desktop">
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/camp_pluto"
                rel="noreferrer"
                className="social-btn"
              >
                <Icon name="instagram" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://twitter.com/camp_pluto"
                rel="noreferrer"
                className="social-btn"
              >
                <Icon name="twitter" />
              </a>
            </li>
            <li>
              <Button
                target="_blank"
                rel="noreferrer"
                href="https://discord.gg/22NkvSgwPV"
              >
                DISCORD
              </Button>
            </li>
          </ul>
          <button
            className="hamburger"
            type="button"
            onClick={handleDrawerToggle}
          >
            <Icon name={drawerOpened ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </HeaderStyle>
  )
}

export default Header
