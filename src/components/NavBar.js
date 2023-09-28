import '../templates/NavBar.css'

export default function NavBar(){

    return (
        <header>
            <a href="/"><img src="#" alt="logo" /></a>
            <h1>FullStack Application Students</h1>
            <nav>
                <ul>
                    <li><a href="/">log in</a></li>
                    <li><a href="/">sign in</a></li>
                </ul>
            </nav>
        </header>
    );
}