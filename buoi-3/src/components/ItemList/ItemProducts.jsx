import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

import "../../assets/bootstrap.css";
import './ItemProducts.css';
import '../FormProduct/FormProduct.css'

import StackProduct from "../StackProduct/StackProduct";
import FormProduct from "../FormProduct/FormProduct";
import Cart from './Cart';

export const productMockData = [
    {
        id: uuidv4(),
        image: 'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg',
        name: 'Sản phẩm 1',
        text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
        price: 100,
    },
    {
        id: uuidv4(),
        image: 'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg',
        name: 'Sản phẩm 2',
        text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
        price: 100,
    },
    {
        id: uuidv4(),
        image: 'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg',
        name: 'Sản phẩm 3',
        text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
        price: 100,
    },
    {
        id: uuidv4(),
        image: 'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg',
        name: 'Sản phẩm 4',
        text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
        price: 100,
    },
    {
        id: uuidv4(),
        image: 'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg',
        name: 'Sản phẩm 5',
        text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
        price: 100,
    },
]

const ItemProducts = () => {

    // 
    const [productList, setProductList] = useState(productMockData);

    // Thêm sản phẩm và cập nhật lại mảng
    const AddProductHandler = (product) => {
        // e.preventDefault();
        const newProduct = {
            ...product,
            id: uuidv4(),
        }
        setProductList([...productList, newProduct])
    };


    // Xóa sản phẩm
    const onDeleteStudentHandler = (id) => {
        // productList.filter(product => product.id === id)
        productList.map( (product, index) => {
            if (product.id === id) {
                // productList.splice(product.id, 1);
                productList.splice(index, 1);
                console.log(product.id);
            }
        });
        setProductList([...productList]);

    };


    // Sắp xếp giá giảm dần
    const arrangeProductHandler = () => {

    }


    // render sản phẩm
    const productListItems = productList.map(product => (
        <Cart key={product.id} product={product} deleteProduct={onDeleteStudentHandler} />
    ));

    return (
        <>
            <FormProduct addNewProduct={AddProductHandler} arrangeProduct={arrangeProductHandler}/>
            <StackProduct />

            <div className="product-list d-flex gap-5 flex-wrap">

                {productListItems}

            </div>
        </>
    )
}

export default ItemProducts;