import React from "react";
import "./Products.css"
import avatar from "../../assets/images/25.jpg"

export class Products extends React.Component {
    render() {
        return (
            <section>
                <div class="body_newproduct">
                    <div class="header_product">
                        <div class="buttons">
                            <button className="btn1"><a className="link" href="./products">PRODUCTS</a></button>
                            <button className="btn2"><a className="link" href="./expenses">EXPENSES</a></button>
                        </div>
                        <div class="avatar">
                            <img className="header_pic" alt="avi" src={avatar} />
                            <p className="header_name">Goce Biskovski</p>
                        </div>
                    </div>
                    <div class="buttons_2">
                        <div class="title">
                            <h2 className="expenses_p">Expenses</h2>
                        </div>
                        <div class="select_3">
                            <p className="header_name3">Filter by:</p>
                            <select className="select_month2">
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
                                <table className="products_tb">
                                    <tr className="categories">
                                        <th className="product_row_menu">Product Name</th>
                                        <th className="product_row_menu">Product Type</th>
                                        <th className="product_row_menu">Product Description</th>
                                        <th className="product_row_menu">Purchase Date</th>
                                        <th className="product_row_menu">Product Price</th>
                                        <th className="product_row_menu">Edit</th>
                                    </tr>
                                    <tr className="table_row">
                                        <td className="product_row">Coca Cola</td>
                                        <td className="product_row">Drink</td>
                                        <td className="product_row">Carbonated Drink</td>
                                        <td className="product_row">30/4/2019</td>
                                        <td className="product_row">65</td>
                                        <td className="product_row"><button className="edit"><i
                                            className="far fa-trash-alt"></i></button><button className="trash"><i
                                                className="far fa-edit"></i></button></td>
                                    </tr>
                                    <tr className="table_row">
                                        <td className="product_row">Pepsi</td>
                                        <td className="product_row">Drink</td>
                                        <td className="product_row">Carbonated Drink 2l</td>
                                        <td className="product_row">30/4/2019</td>
                                        <td className="product_row">65</td>
                                        <td className="product_row"><button className="edit"><i
                                            className="far fa-trash-alt"></i></button><button className="trash"><i
                                                className="far fa-edit"></i></button></td>
                                    </tr>
                                    <tr className="table_row">
                                        <td className="product_row">Coca Cola</td>
                                        <td className="product_row">Drink</td>
                                        <td className="product_row">Carbonated Drink</td>
                                        <td className="product_row">29/4/2019</td>
                                        <td className="product_row">75</td>
                                        <td className="product_row"><button className="edit"><i
                                            className="far fa-trash-alt"></i></button><button className="trash"><i
                                                className="far fa-edit"></i></button></td>
                                    </tr>
                                    <tr className="table_row">
                                        <td className="product_row">Pepsi</td>
                                        <td className="product_row">Drink</td>
                                        <td className="product_row">Carbonated Drink 2l</td>
                                        <td className="product_row">30/4/2019</td>
                                        <td className="product_row">65</td>
                                        <td className="product_row"><button className="edit"><i
                                            className="far fa-trash-alt"></i></button><button className="trash"><i
                                                className="far fa-edit"></i></button></td>
                                    </tr>
                                    <tr className="table_row">
                                        <td className="product_row">Coca Cola</td>
                                        <td className="product_row">Drink</td>
                                        <td className="product_row">Carbonated Drink</td>
                                        <td className="product_row">30/4/2019</td>
                                        <td className="product_row">75</td>
                                        <td className="product_row"><button className="edit"><i
                                            className="far fa-trash-alt"></i></button><button className="trash"><i
                                                className="far fa-edit"></i></button></td>
                                    </tr>
                                    <tr className="table_row">
                                        <td className="product_row">Coca Cola</td>
                                        <td className="product_row">Drink</td>
                                        <td className="product_row">Carbonated Drink</td>
                                        <td className="product_row">30/4/2019</td>
                                        <td className="product_row">75</td>
                                        <td className="product_row"><button className="edit"><i
                                            className="far fa-trash-alt"></i></button><button className="trash"><i
                                                className="far fa-edit"></i></button></td>
                                    </tr>
                                    <tr className="table_row">
                                        <td className="product_row">Pepsi</td>
                                        <td className="product_row">Drink</td>
                                        <td className="product_row">Carbonated Drink 2l</td>
                                        <td className="product_row">30/4/2019</td>
                                        <td className="product_row">65</td>
                                        <td className="product_row"><button className="edit"><i
                                            className="far fa-trash-alt"></i></button><button className="trash"><i
                                                className="far fa-edit"></i></button></td>
                                    </tr>
                                    <tr className="table_row">
                                        <td className="product_row">Coca Cola</td>
                                        <td className="product_row">Drink</td>
                                        <td className="product_row">Carbonated Drink</td>
                                        <td className="product_row">29/4/2019</td>
                                        <td className="product_row">75</td>
                                        <td className="product_row"><button className="edit"><i
                                            className="far fa-trash-alt"></i></button><button className="trash"><i
                                                className="far fa-edit"></i></button></td>
                                    </tr>
                                    <tr className="table_row">
                                        <td className="product_row">Pepsi</td>
                                        <td className="product_row">Drink</td>
                                        <td className="product_row">Carbonated Drink 2l</td>
                                        <td className="product_row">30/4/2019</td>
                                        <td className="product_row">65</td>
                                        <td className="product_row"><button className="edit"><i
                                            className="far fa-trash-alt"></i></button><button className="trash"><i
                                                className="far fa-edit"></i></button></td>
                                    </tr>
                                    <tr className="table_row">
                                        <td className="product_row">Coca Cola</td>
                                        <td className="product_row">Drink</td>
                                        <td className="product_row">Carbonated Drink</td>
                                        <td className="product_row">29/4/2019</td>
                                        <td className="product_row">75</td>
                                        <td className="product_row"><button className="edit"><i
                                            className="far fa-trash-alt"></i></button><button className="trash"><i
                                                className="far fa-edit"></i></button></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="p_btns">
                        <button className="product_btn">NEW CALCULATION</button>
                        <button className="product_btn btn_grey">
                            <a className="link2" href="./newproduct">NEW PRODUCT</a>
                        </button>
                    </div>
                    <div class="alert_cover">
                        <div class="content_alert alert_block">
                            <div class="alert_block">
                                <h3 className="cont_del">Delete Product</h3>
                            </div>
                            <div>
                                <p className="header_name4">You are about to delete this product. Are you sure you wish to continue?</p>
                            </div>
                            <div class="select_4">
                                <button className="btn5">CANCEL</button>
                                <button className="btn6">DELETE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}