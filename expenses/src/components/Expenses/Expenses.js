import React from "react";
import "./Expenses.css"
import avatar from "../../asets/images/25.jpg"

export class Expenses extends React.Component {
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
                            <h2>Expenses</h2>
                        </div>
                        <div class="select_2">
                            <button class="btn3">MONTHLY</button>
                            <button class="btn4">YEARLY</button>
                            <p class="header_name2">Choose Month</p>
                            <p class="month_box">
                                <select class="select_month">
                                    <option default disabled selected>Select Month</option>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                            </p>
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
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Coca Cola</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink</td>
                                        <td class="product_row">30/4/2019</td>
                                        <td class="product_row">65</td>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Pepsi</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink 2l</td>
                                        <td class="product_row">30/4/2019</td>
                                        <td class="product_row">65</td>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Coca Cola</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink</td>
                                        <td class="product_row">29/4/2019</td>
                                        <td class="product_row">75</td>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Pepsi</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink 2l</td>
                                        <td class="product_row">30/4/2019</td>
                                        <td class="product_row">65</td>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Coca Cola</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink</td>
                                        <td class="product_row">30/4/2019</td>
                                        <td class="product_row">75</td>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Coca Cola</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink</td>
                                        <td class="product_row">30/4/2019</td>
                                        <td class="product_row">75</td>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Pepsi</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink 2l</td>
                                        <td class="product_row">30/4/2019</td>
                                        <td class="product_row">65</td>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Coca Cola</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink</td>
                                        <td class="product_row">29/4/2019</td>
                                        <td class="product_row">75</td>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Pepsi</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink 2l</td>
                                        <td class="product_row">30/4/2019</td>
                                        <td class="product_row">65</td>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="product_row">Coca Cola</td>
                                        <td class="product_row">Drink</td>
                                        <td class="product_row">Carbonated Drink</td>
                                        <td class="product_row">29/4/2019</td>
                                        <td class="product_row">75</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="total_calc">
                        <p class="calc_text">Total spent: 1205 den.</p>
                    </div>
                </div>
            </section>
        )
    }
}