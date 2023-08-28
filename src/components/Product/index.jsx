import ButtonDelete from '../ButtonDelete';
import Count from '../Count';
import formatPrice from '../../utils/priceFormater';
import './style.scss';

const Product = ({product, deleteProduct, increase, decrease, changeVale}) => {

    const { img, title, priceTotal, count, id } = product;

    return (
        <section className="product">
            <div className="product__img">
                <img src={`./img/products/${img}`} alt={title} />
            </div>
            <div className="product__title">{title}</div>
            <div className="product__count">
                <Count count={count} increase={increase} decrease={decrease} id={id} changeVale={changeVale} />
            </div>
            <div className="product__price">{formatPrice(priceTotal)} руб.</div>
            <div className="product__controls">
                <ButtonDelete deleteProduct={deleteProduct} id={id} />
            </div>
        </section>
    );
}
 
export default Product;