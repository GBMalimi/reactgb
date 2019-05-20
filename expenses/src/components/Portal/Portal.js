import React from "react";
import "./Portal.css"
import { Route } from "react-router-dom";
import { NewProduct } from "../NewProduct/NewProduct";
import { Products } from "../Products/Products";
import { Expenses } from "../Expenses/Expenses";

export class Portal extends React.Component {
    render() {
        return (
            < main id="portal" >
                <Route path="/newproduct" component={NewProduct} />
                <Route path="/products" component={Products} />
                <Route path="/expenses" component={Expenses} />
            </main >

        )
    }
}