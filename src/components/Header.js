import '../assets/stylesheets/Header.scss';
import Logo from './Logo'
import Menu from "./Menu";

function Header() {
    return (
        <header className={"container-fluid header"}>
            <Logo/>
            <Menu/>
        </header>
    );
}

export default Header;
