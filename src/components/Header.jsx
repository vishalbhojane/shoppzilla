import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <span className='logo'><Link to="/">Logo</Link></span>
                <span className='logo'><Link to="/store">store</Link></span>
            </header>
        </>
    );
}

export default Header;