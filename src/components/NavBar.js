import '../templates/NavBar.css'

export default function NavBar(){

    return (
        <header>
            <h1 className='nav-title'>FullStack Application Students</h1>
            <nav>
                <ul>
                    <li><a className='nav-btn' href="/">Log In</a></li>
                    <li><a className='nav-btn' href="/">Sign In</a></li>
                </ul>
            </nav>
        </header>
    );
}