import "../../assets/bootstrap.css";
import './ItemProducts.css';

import Cart from './Cart';

const ItemProducts = () => {
    return (
        <div className="product-list d-flex gap-5 flex-wrap">
            <Cart
                image='https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg'
                title='Sản phẩm 1'
                text='Some quick example text to build on the card title and make up the bulk of the card content.'
            />
            <Cart
                image='https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg' 
                title='Sản phẩm 2'
                text='Some quick example text to build on the card title and make up the bulk of the card content.'
            />
            <Cart
                image='https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg' 
                title='Sản phẩm 3'
                text='Some quick example text to build on the card title and make up the bulk of the card content.'
            />
            <Cart
                image='https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg' 
                title='Sản phẩm 4'
                text='Some quick example text to build on the card title and make up the bulk of the card content.'
            />
            <Cart
                image='https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg' 
                title='Sản phẩm 5'
                text='Some quick example text to build on the card title and make up the bulk of the card content.'
            />
            
        </div>
    )
}

export default ItemProducts;