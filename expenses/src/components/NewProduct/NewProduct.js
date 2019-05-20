import React from "react";
import "./NewProduct.css"

export class NewProduct extends React.Component {
    render() {
        return (
            <section>
                <div class="body_newproduct">
                
                    <div class="new_product">
                        <div class="avat_new_product">
                            <h4>New Product</h4>
                        </div>
                        <div class="add_new_detals">
                            <label className="input_label">Product Name</label>
                            <input className="input_fields" type="text" />
                            <label className="input_label">Product Description</label>
                            <input className="input_fields" type="text" />
                            <label className="input_label">Product type</label>
                            <input className="input_fields" type="text" />
                            <label className="input_label">Purchase Date</label>
                            <input className="input_fields" type="time" />
                            <label className="input_label">Product Price</label>
                            <input className="input_fields" type="text" />
                            <button className="submit" type="submit">CREATE PRODUCT</button>
                        </div>
                        <div class="add_new_product">
                            <label className="logo_simbol"><i className="circle"></i></label>
                            <div class="product_text">
                                <h4>You are creating a new product</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}