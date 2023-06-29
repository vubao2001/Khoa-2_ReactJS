// import "../../assets/bootstrap.css";
import "../../assets/bootstrap.css";
import "./ItemProducts.css"


const Cart = (props) => {
    const { product, deleteProduct } = props;
    // const {image, title, text, price} = product || {};    

    return (
        <>
            <div className="card" style={{ width: "18rem", }}>
                <img src={product.image} className="card-img-top" alt={product.image} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.text}</p>
                    <p className="card-price"> Giá: {product.price}</p>
                    <a href="#" className="btn btn-primary">Thêm vào giỏ hàng</a>
                    <button className="btn btn-danger" onClick={() => {deleteProduct(product.id)}}>
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}

export default Cart;