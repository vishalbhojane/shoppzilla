import { useContext } from "react";
import ShopContext from '../context/ShopContext'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const ProductWishlist = ({ data}) => {

    const { handleRemoveFromWishList, handleAddToCart } = useContext(ShopContext)

    return (
        <>
            <div className="product-card rel">
                <div className="img-wrap rel">
                    <img className="product__img" src={data.image} alt="" loading="lazy"/>
                </div>
                <div className="meta flex-c-sb flex-col">
                    <p className="product__desc">{data.description}</p>
                    <p><span className="discount__price">{data.discountPrice}</span> <span className="mrp__price">{data.price}</span> <span>{`(${parseInt((data.discountPrice / data.price)*100)}% OFF)`}</span></p>
                    <div className="cta-wrap">
                        <button className="cta-active-fx" style={{ cursor: "pointer" }} onClick={() => { handleAddToCart(data) }}>Add To Bag</button>
                    </div>
                </div>
                <button className="cta m-10 ab-tr" onClick={() => {handleRemoveFromWishList(data)}}> <AiOutlineCloseCircle/> </button>
            </div>
        </>
    );
}

export default ProductWishlist;