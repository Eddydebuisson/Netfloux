import './nav.css'


export default function Nav () {
    return (
        <div className="Nav">
            <div className='netfloux'>NETFLOUX</div>
            
            <input className='search' placeholder='Search for everything'></input>
            <ul>
                <li><a href="www.lol.com">Accueil</a></li>
                <li><a href="www.lol.com"> Film/Serie</a></li>
                <li><a href="www.lol.com">Youtube</a></li>
                <li><a href="www.lol.com">Musique</a></li>
                <li><a href="www.lol.com">Games</a></li>
            </ul>
        </div>
    )
}