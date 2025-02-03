import './style.css'
import NO_PRODUCTS from '../../assets/image/NoProducts.png'

const NoProducts = () => {
    return (
        <div className='no-products'>
            <img alt='' src={NO_PRODUCTS} />
            <h1>В данный момент товары отсутствуют</h1>
        </div>
    );
};

export default NoProducts;