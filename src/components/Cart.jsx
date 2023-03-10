import { Link } from "react-router-dom";
import FormCart from "./FormCart";
import { Button } from "@chakra-ui/react";

const Cart = () => {
    let cart = "";

    if (cart === "dasd"){
        return (
            <>
            <div className="cart_">
                <h2>El carrito de compras está vacio</h2>
                <Link to={"/catalogue"}>
                    <Button colorScheme='red'>Catálogo</Button>
                </Link>
            </div>
            </>
        )
    } else {
        return (
            <>
            <div className="cart_">
                <p>Resumen de compra</p>
                <FormCart />
            </div>
            </>
        )
    }
}

export default Cart