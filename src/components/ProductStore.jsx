import { useContext } from "react";
import ShopContext from '../context/ShopContext'
import { AiOutlineHeart} from 'react-icons/ai'
import { useState } from "react";
import { useEffect } from "react";

const ProductStore = ({ data}) => {

    const black = "#282c3f"
    const pink = '#ff517b'

    const [wlCtaColor, setWlCtaColor] = useState(data.wishlist ? pink : black)
    
    const { handleAddToWishList} = useContext(ShopContext)

    useEffect(()=>{
        setWlCtaColor(data.wishlist ? pink : black)
    },[handleAddToWishList, data.wishlist])

    return (
        <>
            <div className="product-card rel">
                <div className="img-wrap rel">
                    <img className="product__img" src={data.image} alt="" loading="lazy"/>
                </div>
                <div className="meta flex-c-sb flex-col rel">
                    <h3 className="product__title">{data.brand}</h3>
                    <p className="product__desc">{data.description}</p>
                    <p className="product__price"><span className="discount__price">{data.discountPrice}</span> <span className="mrp__price">{data.price}</span> <span>{`(${parseInt((data.discountPrice / data.price)*100)}% OFF)`}</span></p>
                    <div className="wishlist-cta cta-wrap cta flex-c" onClick={() => { handleAddToWishList(data);}}> <button style={{color: wlCtaColor}}  className="cta flex-c-sb g-10 p-5-10"><AiOutlineHeart color={wlCtaColor}/>Wishlist</button> </div>
                </div>
            </div>
        </>
    );
}

export default ProductStore;