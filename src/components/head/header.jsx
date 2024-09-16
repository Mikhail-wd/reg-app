import "./header.css"
import Logo from './logo'

export default function Header() {
    return (
        <div className="header-nav">
            <ul className="header-nav-tabs">
                <li className="header-nav-logo"><Logo />Regs</li>
                <li>About</li>
                <li>Academy</li>
                <li>Feature</li>
            </ul>
        </div>
    )
}