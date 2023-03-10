import React from "react";
import {
    Button,
    Flex,
    Spacer,
    Box,
    ButtonGroup,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import vestidoAmberi from "https://d3ugyf2ht6aenh.cloudfront.net/stores/128/259/products/20190503_2055291-59034942f16ff2fe4115569278787156-1024-1024.jpg";
import vestidoAmberiBlack from "https://d3ugyf2ht6aenh.cloudfront.net/stores/128/259/products/bcp_03261-aab3188601ab4b6e2b15426833880370-1024-1024.jpg";
import vestidoNatie from "https://d3ugyf2ht6aenh.cloudfront.net/stores/128/259/products/img_21211-1941ca42ecdeca37fd15139088075633-1024-1024.jpg";
import carteraTote from "https://http2.mlstatic.com/D_NQ_NP_764638-MLA53560811851_022023-W.webp";
import logo from "../assets/image.jpg";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <Flex maxW="150rem" alignItems="center" gap="2" pt="1">
                    <Link to={"/"}>
                        <Box display="flex" ml="20">
                            <img id="logo_tiffanys" src={logo} />
                        </Box>
                    </Link>
                    <Spacer />
                        <div className="botones_navbar">
                            <Flex>
                                <ButtonGroup className="botones" gap="7" justify="center">
                                    <Button colorScheme="teal" variant="link">
                                        <Link to={"/catalogue"}>Catálogo</Link>
                                    </Button>
                                    <Menu className="menu_nav">
                                        <MenuButton
                                            bg="light"
                                            as={Button}
                                            colorScheme="light"
                                            rightIcon={<ChevronDownIcon />}
                                        >
                                            Carteras
                                        </MenuButton>
                                        <MenuList bg="#383838">
                                            <Flex>
                                                <Link to={`/category/${"Carteras"}`}>
                                                    <MenuItem bg="ligth">
                                                        <img className="imagen_vestido" src={carteraTote} alt="" />
                                                            Cartera Tote Shopper
                                                    </MenuItem>
                                                </Link>
                                            </Flex>
                                            <Flex>
                                                <Link to={`/category/${"VestidosLargos"}`}>
                                                    <MenuItem bg="ligth">
                                                        <img className="imagen_vestido" src={vestidoAmberi} alt="" />
                                                            Vestido Amberi
                                                    </MenuItem>
                                                </Link>  
                                            </Flex>
                                            <Flex>
                                                <Link to={`/category/${"vestidosLargos"}`}>
                                                    <MenuItem bg="ligth">
                                                        <img className="imagen_vestido" src={vestidoAmberiBlack} alt="" />
                                                            Vestido Amberi Black
                                                    </MenuItem>
                                                </Link>  
                                            </Flex>
                                            <Flex>
                                                <Link to={`/category/${"vestidosCortos"}`}>
                                                    <MenuItem bg="ligth">
                                                        <img className="imagen_vestido" src={vestidoNatie} alt="" />
                                                            Vestido Natie
                                                    </MenuItem>
                                                </Link>
                                            </Flex>
                                        </MenuList>
                                    </Menu>
                                    <Menu className="menu_nav">
                                        <MenuButton
                                            bg="light"
                                            as={Button}
                                            colorScheme="light"
                                            rightIcon={<ChevronDownIcon />}
                                            >
                                            Calzado
                                        </MenuButton>
                                            <MenuList bg="#383838">
                                                <MenuItem bg="ligth">Zapatillas</MenuItem>
                                                <MenuItem bg="ligth">Botas</MenuItem>
                                                <MenuItem bg="ligth">Sandalias</MenuItem>
                                                <Link to={`/category/${"Calzado"}`}>
                                                    <MenuItem bg="ligth">Calzado</MenuItem>
                                                </Link>
                                                <MenuItem bg="ligth">Zapatilla Icon</MenuItem>
                                            </MenuList>
                                    </Menu>
                                    <Menu className="menu_nav">
                                        <MenuButton
                                            bg="light"
                                            as={Button}
                                            colorScheme="light"
                                            rightIcon={<ChevronDownIcon />}
                                         >
                                            Accesorios
                                        </MenuButton>
                                        <MenuList bg="#383838">
                                            <MenuItem bg="ligth">Pañuelos</MenuItem>
                                            <MenuItem bg="ligth">Collares</MenuItem>
                                            <MenuItem bg="ligth">Aritos</MenuItem>
                                        </MenuList>
                                    </Menu>
                                    <Link to={"/contact"}>
                                        <Button colorScheme="teal" variant="outline">
                                            Contacto
                                        </Button>
                                    </Link>
                                </ButtonGroup>
                            </Flex>
                        </div>
                        <Link to={"/cart"}>
                            <CartWidget />
                        </Link>
                </Flex>
            </div>
        </>
    );
};

export default NavBar