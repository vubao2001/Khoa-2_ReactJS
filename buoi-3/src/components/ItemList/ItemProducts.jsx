import { useState } from 'react';

import "../../assets/bootstrap.css";
import './ItemProducts.css';
import '../FormProduct/FormProduct.css'

import StackProduct from "../StackProduct/StackProduct";
// import FormProduct from "../FormProduct/FormProduct";
import Cart from './Cart';

export const productMockData = [
    {
        id: '1',
        image: 'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg',
        name: 'Sản phẩm 1',
        text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
        price: 100,
    },
    {
        id: '2',
        image: 'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg',
        name: 'Sản phẩm 2',
        text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
        price: 100,
    },
    {
        id: '3',
        image: 'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg',
        name: 'Sản phẩm 3',
        text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
        price: 100,
    },
    {
        id: '4',
        image: 'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg',
        name: 'Sản phẩm 4',
        text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
        price: 100,
    },
    {
        id: '5',
        image: 'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg',
        name: 'Sản phẩm 5',
        text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
        price: 100,
    },
]

const ItemProducts = () => {

    // const [productList, setProductList] = useState(productMockData);
    const [productList, setProductList] = useState(productMockData);

    // Thêm sản phẩm và cập nhật lại mảng
    const onAddProductHandler = (e) => {
        e.preventDefault();
        // console.log(e.target['image'].files[0].name);
        const form = e.target;
        const newProduct = {
            image: form['image'].files[0],
            name: form['name'].value,
            text: form['text'].value,
            price: form['price'].value,
        }
        // console.log(newProduct);
        productList.push(newProduct);
        setProductList([...productList]);
    };

    // Xóa sản phẩm
    const onDeleteProductHandler = (e) => {
        e.preventDefault();
        // console.log(113);
        // productList.map((product) => {
        //     if (e.target['name'].value === product.name) {
        //         productList.splice(productList[product.index], 1);
        //         setProductList([...productList]);
        //     }
        // })
    };

    // render sản phẩm
    const productListItems = productList.map(product => (
        <Cart key={product.id} {...product} />
    ));

    return (
        <>
            <div className="form-product">
                <h3>Form xử lý sản phẩm</h3>
                <form action="" onSubmit={onAddProductHandler}>
                    <div className="tt">
                        <label htmlFor="">Chọn ảnh:</label>
                        <input type="file" name="image" />
                    </div>

                    <div className="tt">
                        <label htmlFor="">Tên sản phẩm:</label>
                        <input type="text" name="name" />
                    </div>

                    <div className="tt">
                        <label htmlFor="">Mô tả:</label>
                        <input type="text" name="text" />
                    </div>

                    <div className="tt">
                        <label htmlFor="">Giá:</label>
                        <input type="number" name='price' />
                    </div>

                    <button type="submit" >Thêm</button>
                    <button>Sửa</button>
                    <button>Tìm kiếm</button>
                    <button onClick={onDeleteProductHandler}>Xóa</button>
                </form>
            </div>
            {/* <FormProduct /> */}
            <StackProduct />

            <div className="product-list d-flex gap-5 flex-wrap">

                {productListItems}

                {/* <Cart
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
                /> */}

            </div>
        </>
    )
}

export default ItemProducts;