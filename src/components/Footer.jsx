import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <footer className="flex-c-sb p-20-25 mt-20">
        <span className='logo'><Link to="/">Home</Link></span>
        <span>Copyright © Shoppzilla.com</span>
        </footer>
        </>
    );
}

export default Footer;