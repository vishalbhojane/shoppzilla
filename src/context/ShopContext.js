import { createContext, useRef, useState } from "react";
import { data } from '../data/db'

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const apiData = data
    

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
    

    return (
        <ShopContext.Provider
            value={{
                productsData: pData,
                brands: bn,
                categories: ct,
                genders: gn,

                //Functions
                mainFilter
            }}
        >{children}</ShopContext.Provider>
    )
}

export default ShopContext