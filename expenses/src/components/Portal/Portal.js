import React from "react";
import "./Portal.css"
import { Route } from "react-router-dom";
import { NewProduct } from "../NewProduct/NewProduct";
import { Products } from "../Products/Products";
import { Expenses } from "../Expenses/Expenses";
import { Header } from "../Header/Header";

export class Portal extends React.Component {
    render() {
        return (
            < main id="portal" >
                {/* <Header/> */}
                <Route exact path="/(newproduct|products|expenses)/" component={Header} />
                <Route path="/newproduct" component={NewProduct} />
                <Route path="/products" component={Products} />
                <Route path="/expenses" component={Expenses} />
            </main >

        )
    }
}