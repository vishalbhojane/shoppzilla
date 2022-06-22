import { Link } from 'react-router-dom'


const Home = () => {
    const heroImgSmall = "data/home/images/pexels-tembela-bohle-1884584-640-small.jpg"
    const heroImgMedium = "data/home/images/pexels-tembela-bohle-1884584-1280-medium.jpg"
    const heroImgLarge = "data/home/images/pexels-tembela-bohle-1884584-1920-large.jpg"

    return (
        <>
            <div className="hero-wrap rel">
                <img className="hero-bg-img" src={heroImgMedium} srcSet={`${heroImgSmall} 300w, ${heroImgMedium} 640w, ${heroImgLarge} 1280w`} alt=""/>
                <div className='ab-cc cta flex-cc flex-column g-25'>
                    <h1 className='hero-tagline'>Stylish and sophisticated fashion boutique</h1>
                    <button className="cta-theme p-10-20"> <Link to="/store">Shop Now</Link></button>
                </div>
            </div>
        </>
    );
}

export default Home;