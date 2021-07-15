import ProductCard from './ProductCard';
import Products from './Products';

export default function Main() {

    return (
        <div className="col-10 p-5 bg-light" style={{ height: '100vh' }}>
            <div className="row mb-5 ps-3">
                <div className="col-3">
                    <ProductCard />
                </div>
                <div className="col-3">
                    <ProductCard />
                </div>
                <div className="col-3">
                    <ProductCard />
                </div>
                <div className="col-3">
                    <ProductCard />
                </div>
            </div>
            <div className="row mb-5 pb-5 ps-3">
                <div className="col-3">
                    <ProductCard />
                </div>
                <div className="col-3">
                    <ProductCard />
                </div>
                <div className="col-3">
                    <ProductCard />
                </div>
                <div className="col-3">
                    <ProductCard />
                </div>
            </div>
        </div>
    );
}
