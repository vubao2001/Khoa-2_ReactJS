import { useState } from 'react';

import './FormProduct.css';
// import { productMockData } from '../ItemList/ItemProducts';

// export const productMockData = [
//     {
//         id: '1',
//         image: 'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg',
//         name: 'Sản phẩm 1',
//         text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
//         price: 100,
//     },
//     {
//         id: '2',
//         image: 'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg',
//         name: 'Sản phẩm 2',
//         text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
//         price: 100,
//     },
//     {
//         id: '3',
//         image: 'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg',
//         name: 'Sản phẩm 3',
//         text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
//         price: 100,
//     },
//     {
//         id: '4',
//         image: 'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg',
//         name: 'Sản phẩm 4',
//         text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
//         price: 100,
//     },
//     {
//         id: '5',
//         image: 'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg',
//         name: 'Sản phẩm 5',
//         text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
//         price: 100,
//     },
// ]

const initialState = {
    image: "",
    name: "",
    text: "",
    price: "",
}

const FormProduct = (props) => {

    const [product, setProduct] = useState(initialState);


    // cách 1
    // const onAddProductHandler = (e) => {
    //     e.preventDefault();
    //     // console.log(e.target['image'].files);
    //     const form = e.target;
    //     const newProduct = {
    //         image: form['image'].files[0],
    //         name: form['name'].value,
    //         text: form['text'].value,
    //         price: form['price'].value,
    //     }
    //     // console.log(newProduct);
    //     productList.push(newProduct);
    //     setProductList([...productList]);
    // };

    
    // cách 2: nên dùng
    const onChangeHandler  = (e) => {
        e.preventDefault();
        const {name , value} = e.target;
        // const file = e.target.files[0];
        // file.preview = URL.createObjectURL(file);
        // console.log(typeof file.preview);

        setProduct({
            ...product,
            [name]: value,
            // image: file.preview,
        })
    };


    // 
    const onSubmitHandler = (e) => {
        e.preventDefault();

        props.addNewProduct(product);

        setProduct(initialState)
    }

    const onArrangeHandler = () => {
        props.arrangeProduct();
    };


    return (
        <>
            <div className="form-product">
                <h3>Form xử lý sản phẩm</h3>
                <form action="" onSubmit={onSubmitHandler}>
                    <div className="tt">
                        <label htmlFor="">Chọn ảnh:</label>
                        <input type="file" accept="image/*" name="image" value={product.image} onChange={onChangeHandler} />
                    </div>

                    <div className="tt">
                        <label htmlFor="">Tên sản phẩm:</label>
                        <input type="text" name="name" value={product.name} onChange={onChangeHandler} />
                    </div>

                    <div className="tt">
                        <label htmlFor="">Mô tả:</label>
                        <input type="text" name="text" value={product.text} onChange={onChangeHandler} />
                    </div>

                    <div className="tt">
                        <label htmlFor="">Giá:</label>
                        <input type="number" name='price' value={product.price} onChange={onChangeHandler} />
                    </div>

                    <button type="submit" >Thêm</button>
                    {/* <button>Sửa</button>
                    <button>Tìm kiếm</button> */}
                </form>
                    <button onClick={onArrangeHandler} >Sắp xếp (theo giá giảm dần)</button>
            </div>
        </>
    );
};

export default FormProduct;