// import "../../assets/bootstrap.css";
import "../../assets/bootstrap.css";
import "./ItemProducts.css"


const Cart = (product) => {
    // const {image, title, text, price} = props || {};    

    return (
        <>
            <div className="card" style={{ width: "18rem", }}>
                <img src={product.image} className="card-img-top" alt={product.image} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.text}</p>
                    <p className="card-price"> Giá: {product.price}</p>
                    <a href="#" className="btn btn-primary">Thêm vào giỏ hàng</a>
                </div>
            </div>
        </>
    )
}

export default Cart;

{/* <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://via.placeholder.com/200x200" alt="Product" className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title mb-0">Product Name</h5>
                            <div className="mb-3">
                                <span className="badge bg-success">In stock</span>
                            </div>
                            <p className="card-text">Product description goes here.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Add to Cart</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                                </div>
                                <strong className="text-muted">$9.99</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}