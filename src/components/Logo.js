function Logo() {
    return (
        <a href={"/#"} onClick={() => {
            console.log('Homepage')
        }}>
            <img src={"assets/images/alo-tech.png"} alt={"AloTech Logo"} width={120}/>
        </a>
    );
}

export default Logo;
