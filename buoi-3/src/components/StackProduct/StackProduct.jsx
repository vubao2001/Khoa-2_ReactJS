import "../../assets/bootstrap.css";
import './StackProduct.css';


const StackProduct = () => {
    return (
        <div className="stack-products d-flex align-items-center justify-content-between mb-3">
            <div className="stack d-flex align-items-center justify-content-center">
                <p className="me-4">Sắp xếp theo</p>
                <button>Liên Quan</button>
                <button>Mới Nhất</button>
                <button>Bán Chạy</button>
                <select name="price" id="stack__price">
                    <option value="price" disabled placeholder="Giá">Giá</option>
                    <option value="100">100.000</option>
                    <option value="200">200.000</option>
                </select>
            </div>

            <div className="phan-trang d-flex align-items-center justify-content-center">
                <p className="me-2"><span>1</span>/15</p>
                <button>&lt;</button>
                <button>&gt;</button>
            </div>
        </div>
    )
}

export default StackProduct;