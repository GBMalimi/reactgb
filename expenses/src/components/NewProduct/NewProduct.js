import React from "react";
import "./NewProduct.css"

export class NewProduct extends React.Component {
    render() {
        return (
            <section>
                <div class="body_newproduct">
                    <div class="header_product">
                        <div class="buttons">
                            <button class="btn1"><a class="link" href="./Products.html">PRODUCTS</a></button>
                            <button class="btn2"><a class="link" href="./Expenses.html">EXPENSES</a></button>
                        </div>
                        <div class="avatar">
                            <img class="header_pic" alt="avi" src="./pics/25.jpg" />
                            <p class="header_name">Goce Biskovski</p>
                        </div>
                    </div>
                    <div class="new_product">
                        <div class="avat_new_product">
                            <h4>New Product</h4>
                        </div>
                        <div class="add_new_detals">
                            <label class="input_label">Product Name</label>
                            <input class="input_fields" type="text" />
                            <label class="input_label">Product Description</label>
                            <input class="input_fields" type="text" />
                            <label class="input_label">Product type</label>
                            <input class="input_fields" type="text" />
                            <label class="input_label">Purchase Date</label>
                            <input class="input_fields" type="time" />
                            <label class="input_label">Product Price</label>
                            <input class="input_fields" type="text" />
                            <button class="submit" type="submit">CREATE PRODUCT</button>
                        </div>
                        <div class="add_new_product">
                            <label class="logo_simbol"><i class="fas fa-plus-circle"></i></label>
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