import { FooterStyle } from "./Footer.style"
import { Icon } from "../UIKit"

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <ul className="social">
          <li>
            <a
              href="https://twitter.com/camp_pluto"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="twitter" />
            </a>
          </li>
          <li>
            <a href="#" rel="noreferrer">
              <Icon name="instagram" />
            </a>
          </li>
        </ul>
        <p className="copyright">©{new Date().getFullYear()} by Camp Pluto</p>
      </div>
    </FooterStyle>
  )
}

export default Footer
