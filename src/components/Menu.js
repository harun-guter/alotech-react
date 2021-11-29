import '../assets/stylesheets/Menu.css'
import {menu} from "../data/menu";

function Menu() {
    return (
        <div className={"header-menu"}>
            <span className={"d-none d-xl-block d-lg-block d-md-block mx-2"}>{"Harun Guter"}</span>
            <ul>
                {
                    menu.map(
                        (menu) =>
                            <li key={menu.id}>
                                <a href={"/#"} onClick={() => console.log(menu.data)} title={menu.title}>
                                    <i className={menu.icon}/>
                                </a>
                            </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Menu;
