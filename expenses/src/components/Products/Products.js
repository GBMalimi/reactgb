import React from "react";
import "./Products.css"
import avatar from "../../asets/images/25.jpg"

export class Products extends React.Component {
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
                            <img class="header_pic" alt="avi" src={avatar} />
                            <p class="header_name">Goce Biskovski</p>
                        </div>
                    </div>
                    <div class="buttons_2">
                        <div class="title">
                            <h2 class="expenses_p">Expenses</h2>
                        </div>
                        <div class="select_3">
                            <p class="header_name3">Filter by:</p>
                            <select class="select_month2">
                                <option default disabled selected>Year</option>
                                <option>Higest Priec</option>
                                <option>Lowest Price</option>
                                <option>Latest Price</option>
                            </select>
                        </div>
                    </div>
                    <div id="table-wrapper">
                        <div id="table-scroll">
                            <div>
                                <table class="products_tb">
                                    <tr class="categories">
                                        <th class="product_row_menu">Product Name</th>
                                        <th class="product_row_menu">Product Type</th>
                                        <th class="product_row_menu">Product Description</th>
                                        <th class="product_row_menu">Purchase Date</th>
                                        <th class="product_row_menu">Product Price</th>
                                        <th class="product_row_menu">Edit</th>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Coca Cola</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink</td>
                                        <td class="product_row">30/4/2019</td>
                                        <td class="product_row">65</td>
                                        <td class="product_row"><button class="th-btn"><i
                                            class="far fa-trash-alt"></i></button><button class="th-btn"><i
                                                class="far fa-edit"></i></button></td>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Pepsi</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink 2l</td>
                                        <td class="product_row">30/4/2019</td>
                                        <td class="product_row">65</td>
                                        <td class="product_row"><button class="th-btn"><i
                                            class="far fa-trash-alt"></i></button><button class="th-btn"><i
                                                class="far fa-edit"></i></button></td>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Coca Cola</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink</td>
                                        <td class="product_row">29/4/2019</td>
                                        <td class="product_row">75</td>
                                        <td class="product_row"><button class="th-btn"><i
                                            class="far fa-trash-alt"></i></button><button class="th-btn"><i
                                                class="far fa-edit"></i></button></td>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Pepsi</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink 2l</td>
                                        <td class="product_row">30/4/2019</td>
                                        <td class="product_row">65</td>
                                        <td class="product_row"><button class="th-btn"><i
                                            class="far fa-trash-alt"></i></button><button class="th-btn"><i
                                                class="far fa-edit"></i></button></td>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Coca Cola</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink</td>
                                        <td class="product_row">30/4/2019</td>
                                        <td class="product_row">75</td>
                                        <td class="product_row"><button class="th-btn"><i
                                            class="far fa-trash-alt"></i></button><button class="th-btn"><i
                                                class="far fa-edit"></i></button></td>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Coca Cola</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink</td>
                                        <td class="product_row">30/4/2019</td>
                                        <td class="product_row">75</td>
                                        <td class="product_row"><button class="th-btn"><i
                                            class="far fa-trash-alt"></i></button><button class="th-btn"><i
                                                class="far fa-edit"></i></button></td>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Pepsi</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink 2l</td>
                                        <td class="product_row">30/4/2019</td>
                                        <td class="product_row">65</td>
                                        <td class="product_row"><button class="th-btn"><i
                                            class="far fa-trash-alt"></i></button><button class="th-btn"><i
                                                class="far fa-edit"></i></button></td>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Coca Cola</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink</td>
                                        <td class="product_row">29/4/2019</td>
                                        <td class="product_row">75</td>
                                        <td class="product_row"><button class="th-btn"><i
                                            class="far fa-trash-alt"></i></button><button class="th-btn"><i
                                                class="far fa-edit"></i></button></td>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Pepsi</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink 2l</td>
                                        <td class="product_row">30/4/2019</td>
                                        <td class="product_row">65</td>
                                        <td class="product_row"><button class="th-btn"><i
                                            class="far fa-trash-alt"></i></button><button class="th-btn"><i
                                                class="far fa-edit"></i></button></td>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Coca Cola</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink</td>
                                        <td class="product_row">29/4/2019</td>
                                        <td class="product_row">75</td>
                                        <td class="product_row"><button class="th-btn"><i
                                            class="far fa-trash-alt"></i></button><button class="th-btn"><i
                                                class="far fa-edit"></i></button></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="p_btns">
                        <button class="product_btn">NEW CALCULATION</button>
                        <button class="product_btn btn_grey">
                            <a class="link2" href="./NewProduct.html">NEW PRODUCT</a>
                        </button>
                    </div>
                    <div class="alert_cover">
                        <div class="content_alert alert_block">
                            <div class="alert_block">
                                <h3 class="cont_del">Delete Product</h3>
                            </div>
                            <div>
                                <p class="header_name4">You are about to delete this product. Are you sure you wish to continue?</p>
                            </div>
                            <div class="select_4">
                                <button class="btn5">CANCEL</button>
                                <button class="btn6">DELETE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}