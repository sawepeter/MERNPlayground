import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout Buddy</h1>
                    {/* <img src={require('../images/logo.svg').default} alt="Workout Buddy" width={100} height={100} /> */}
                </Link>

            </div>
        </header>
    )
}

export default Navbar;