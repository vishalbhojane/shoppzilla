import { Link } from 'react-router-dom'
import { useContext} from "react";
import ShopContext from '../context/ShopContext'
import { AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {RiShoppingBagLine} from 'react-icons/ri'

const Header = () => {
    const { wishlistData} = useContext(ShopContext)

    return (
        <>
            <header className='flex-c-sb p-20-25 mb-20'>
                <div>
                    <span className='logo'><Link to="/">ShoppZilla</Link></span>
                </div>

                <nav className='flex-c-sb g-10 rel'>
                    <Link className='logo' to="/store">Store</Link>
                    <Link className='flex-c' to="/wishlist">{wishlistData.length > 0 ? <AiFillHeart color="#ff517b"/> : <AiOutlineHeart/>}</Link>
                    <Link className='flex-c' to="/cart"><RiShoppingBagLine/></Link>
                    
                </nav>
            </header>
        </>
    );
}

export default Header;
