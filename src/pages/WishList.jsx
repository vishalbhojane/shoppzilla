import { useContext } from "react";
import ShopContext from "../context/ShopContext";
import ProductWishlist from "../components/ProductWishlist";

const WishList = () => {
    const { wishlistData } = useContext(ShopContext)

    return (
        <>
            <ul className="wishlist-container p-20-25">
                {
                    wishlistData.map(el =><ProductWishlist key={el.id} data={el} wlPg={true}/>)
                }
            </ul>
        </>
    );
}

export default WishList;