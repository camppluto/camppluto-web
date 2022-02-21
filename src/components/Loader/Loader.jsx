import { LoaderStyle } from "./Loader.style"
import Logo from "../../assets/logo-icon.svg"

const MyComponent = ({ className }) => {
  return (
    <LoaderStyle className={className}>
      <img src={Logo} alt="Camp Pluto" className="logo" />
      <div className="bar">
        <svg>
          <circle cx="50%" cy="50%" r="50%" />
          <circle className="filling" cx="50%" cy="50%" r="50%" />
        </svg>
      </div>
    </LoaderStyle>
  )
}

export default MyComponent
