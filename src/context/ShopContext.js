import { useEffect } from "react";
import { createContext, useRef, useState } from "react";
import { data } from '../data/db'

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const apiData = data
    const TAX_CLOTHES = 5
    

    const [pData, setPData] = useState([...apiData])
    const pDataRf = useRef([...apiData])

    const gn = [...new Set(apiData.map(el => el.gender))]
    const [ct, setCt] = useState([...new Set(apiData.map(el => el.category))])
    const [bn, setBn] = useState([...new Set(apiData.map(el => el.brand))])

    const ctRf = useRef([])
    const bnRf = useRef([])
    
    const ftGn = useRef([]);
    const ftCt = useRef([]);
    const ftBn = useRef([]);
    
    const ftpTemp = useRef([])
    const ftpGn = useRef([])
    const ftpCt = useRef([])
    const ftpBn = useRef([])

    const bgT = useRef(0)
    const bgD = useRef(0)
    const txT = useRef(0)
    const orT = useRef(0)
    
    const [bagTotal, setBagTotal] = useState(0)
    const [bagDiscount, setBagDiscount] = useState(0)
    const [taxTotal, setTaxTotal] = useState(0)
    const [orderTotal, setOrderTotal] = useState(0)
    
    const [wishlistData, setWishlistData] = useState([])
    
    const cartRef = useRef([])
    const [cartData, setcartData] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(2);
    const [ldi, setLdi] = useState(currentPage * postsPerPage)
    const [fdi, setFdi] = useState(ldi - postsPerPage)

    const [pagedData, setPageData] = useState([])
    
    const screenWidth = useRef(window.screen.width)

    const getNewKey = () => {
        return `${new Date().getTime().toString()}`
    }
    
    const ftUpdater = (e, arr) => {
        if (e.target.checked) {
            arr.push(e.target.value)
        } else {
            const index = arr.findIndex(el => el === e.target.value)
            arr.splice(index, 1)
        }
    }

    const mainFilter = (e) => {
    
        e.target.name === "gender" && ftUpdater(e, ftGn.current)
        
        if(!!ftGn.current.length) {
            ftpTemp.current = [...pDataRf.current.filter((item) => ftGn.current.includes(item.gender))]
            ftpGn.current = ftpTemp.current
            ctRf.current = [...new Set(ftpGn.current.map(el => el.category))]
            bnRf.current = [...new Set(ftpGn.current.map(el => el.brand))]
            setCt(ctRf.current)
            setBn(bnRf.current)
        } else if(!ftGn.current.length) {
            ftpTemp.current = [...apiData]
            ftpGn.current = ftpTemp.current
            setCt([...new Set(apiData.map(el => el.category))])
            setBn([...new Set(apiData.map(el => el.brand))])
        }

        e.target.name === "category" && ftUpdater(e, ftCt.current)

        if(!!ftCt.current.length) {
            ftpTemp.current = [...ftpTemp.current.filter((item) => ftCt.current.includes(item.category))]
            ftpCt.current = ftpTemp.current
            bnRf.current = [...new Set(ftpCt.current.map(el => el.brand))]
            setBn(bnRf.current)
        } else if(!ftCt.current.length) {
            ftpTemp.current = ftpGn.current
            ftpCt.current = ftpTemp.current
            setBn([...new Set(ftpGn.current.map(el => el.brand))])
        }

        e.target.name === "brand" && ftUpdater(e, ftBn.current)
        
        if(!!ftBn.current.length) {
            ftpTemp.current = [...ftpTemp.current.filter((item) => ftBn.current.includes(item.brand))]
            ftpBn.current = ftpTemp.current
        } else if(!ftBn.current.length) {
            ftpTemp.current = ftpCt.current
            ftpBn.current = ftpTemp.current
        }
        
        setPData(ftpBn.current)
    }

    const handleAddToWishList = (el) => {
        if(!wishlistData.includes(el)){
            el.wishlist = true
            setWishlistData([el, ...wishlistData])
        }
        else {
            handleRemoveFromWishList(el)
        }
    }

    const handleRemoveFromWishList = (el) => {
        el.wishlist = false
            setWishlistData(wishlistData.filter(data => data !== el))
    }

    const handleAddToCart = (el) => {
        if(!cartData.includes(el)){
            el.cart = true
            el.cartQuantity = 1
            setcartData([el, ...cartData])
        }
    }

    const handleRemoveFromCart = (el) => {
        el.cart = false
        el.cartQuantity = 0
        setcartData(cartData.filter(data => data !== el))
    }

    const handleCartQuantity = (el, action) => {
        cartRef.current = []

        if(action === "add") el.cartQuantity += 1
        if(action === 'remove' && el.cartQuantity > 1) el.cartQuantity -= 1

        cartData.map((data) => {
            if(el.id === data.id) data.cartQuantity = el.cartQuantity
            cartRef.current.push(data)
        })

        setcartData(cartRef.current)
    }

    const updateCart = () => {
        bgT.current = 0;
        bgD.current = 0;
        txT.current = 0;
        orT.current = 0;
        cartData.map(el => {
            bgT.current += (el.price * el.cartQuantity)
            bgD.current += ((el.price - el.discountPrice) * el.cartQuantity)
        })
        txT.current = parseFloat(((bgT.current - bgD.current) * (TAX_CLOTHES/100)).toFixed(2))
        orT.current = bgT.current - bgD.current + txT.current

        setBagTotal(bgT.current)
        setBagDiscount(bgD.current)
        setTaxTotal(txT.current)
        setOrderTotal(orT.current)
    }

    useEffect(()=>{
        updateCart()
    }, [cartData])

    // useEffect(()=>{
    //     setPageData(pData.slice(fdi, ldi))
    // },[pData.length])

    window.addEventListener('resize', ()=>{screenWidth.current = window.screen.width})
    
    return (
        <ShopContext.Provider
            value={{
                TAX_CLOTHES,
                productsData: pData,
                brands: bn,
                categories: ct,
                genders: gn,
                wishlistData,
                cartData,
                screenWidth,
                bagTotal,
                bagDiscount,
                taxTotal,
                orderTotal,

                currentPage,
                postsPerPage,
                ldi,
                fdi,
                pagedData,

                
                setCurrentPage,
                setPostsPerPage,
                setLpi: setLdi,
                setFpi: setFdi,
                
                //Functions
                getNewKey,
                mainFilter,
                handleAddToWishList,
                handleRemoveFromWishList,
                handleAddToCart,
                handleRemoveFromCart,
                setcartData,
                handleCartQuantity,
            }}
        >{children}</ShopContext.Provider>
    )
}

export default ShopContext