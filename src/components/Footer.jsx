import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const Footer = () => {
    const instagram = () => {
        window.location.href = "https://www.instagram.com";
    };

    const twitter = () => {
        window.location.href = "https://www.twitter.com";
    };
    return (
        <div className="footer">
            <div className="aboutUs">
                <h2>Acerca de nosotros</h2>
                <div>
                    Somos una tienda que se encarga de la venta de vestidos y accesorios para la muejer.
                </div>
            </div>
            <div className="footer_categories">
                <h2>Categorías</h2>
                <ul>
                    <Link to={`/category/${"VestidosLargos"}`}>
                        <li>
                            <h3>Vestidos Largos</h3>
                        </li>
                    </Link>{" "}
                    <Link to={`/category/${"VestidosCortos"}`} >
                        <li>
                            <h3>Vestidos Cortos</h3>
                        </li>
                    </Link>
                    <Link to={`/category/${"Carteras"}`} >
                        <li>
                            <h3>Carteras</h3>
                        </li>
                    </Link>{" "}
                    <Link to={`/category/${"Calzado"}`} >
                        <li>
                            <h3>Calzado</h3>
                        </li>
                    </Link>
                </ul>
            </div>
        <div className="footer_contact">
            <h2>Contactános</h2>
            <Flex alingItems="center" gap={2}>
                <h4>2625571030</h4>
            </Flex>
            <Flex alingItems="center" gap={2}>
                    <button
                        onClick={() => (window.location = "mailto:analaura.sampirisi@gmail.com")}
                    >
                    analaura.sampirisi@gmail.com
                    </button>
            </Flex>
            <Link target="_blank" to={"https://goo.gl/maps/kjMzH9j4pm9SXN6d9"}>
                <Flex alignItems="center" gap={2}>
                    <h4>Av. San Martín 378, General Alvear, Mendoza</h4>
                </Flex>
            </Link>
        </div>
        <div className="footer_networks">
            <h2>Sigamos conectados</h2>
            <div className="networks">
                <Link target="_blank" to={"https://www.instagram.com"}>
                </Link>
                <Link target="_blank" to={"https://www.twitter.com"}>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default Footer;