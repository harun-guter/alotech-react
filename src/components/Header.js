import '../assets/stylesheets/Header.css';

function Header() {
    return (
        <header className={"container-fluid"}>
            <img src={"./assets/images/small-logo.png"} alt={"AloTech"}/>
            <div className={"header-items"}>
                <span>{"Harun Guter"}</span>
                <ul>
                    <li><a href={"/#"}><i className={"fas fa-home"}/></a></li>
                    <li><a href={"/#"}><i className={"fas fa-question"}/></a></li>
                    <li><a href={"/#"}><i className={"fas fa-book"}/></a></li>
                    <li><a href={"/#"}><i className={"fas fa-user"}/></a></li>
                    <li><a href={"/#"}><i className={"fas fa-power-off"}/></a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
