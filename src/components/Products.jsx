import ProductCard from './ProductCard';
import React from 'react';

export default function Products() {

    return (
        <div className="col-10 p-5 bg-light" style={{ height: '100vh' }}>
            <div className="row ps-5">
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
            <div className="row my-5 pb-5 ps-5">
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
