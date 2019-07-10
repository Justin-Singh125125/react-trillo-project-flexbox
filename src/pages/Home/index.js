import React from "react";

//layouts
import Container from "../../layout/Container";
import Header from "../../layout/Header";
import Content from "../../layout/Content";
import Sidebar from "../../layout/Sidebar";
import HotelView from "../../layout/Hotel-View";
import UserNavbar from "../../layout/UserNavbar";

//components
import Image from "../../components/Image";
import SearchBar from "../../components/SearchBar";
import UserNavbarIconBox from "../../components/User-Navbar-Icon-Box";
import UserBox from "../../components/UserBox";

//images
import Logo from "../../img/logo.png";
import UserImage from "../../img/user.jpg"

//svg sprites
import SvgIcons from '../../img/sprite.svg'






class Home extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <Image src={Logo} alt="trillo logo" className="logo" />

                    {/* do classes like this to make the component reusable */}
                    <SearchBar
                        formClass="search"
                        inputClass="search__input"
                        placeholder="Search hotels"
                        btnClass="search__button"
                        svgClass="search__icon"
                        svgIcons={SvgIcons}
                        svgSelection="icon-magnifying-glass"
                    />
                    <UserNavbar>
                        <UserNavbarIconBox
                            iconBoxClass="user-nav__icon-box"
                            spanClass="user-nav__notification"
                            spanText="7"
                            svgClass="user-nav__icon"
                            svgIcons={SvgIcons}
                            svgSelection="icon-bookmark"

                        />
                        <UserNavbarIconBox
                            iconBoxClass="user-nav__icon-box"
                            spanClass="user-nav__notification"
                            spanText="13"
                            svgClass="user-nav__icon"
                            svgIcons={SvgIcons}
                            svgSelection="icon-chat"
                        />
                        <UserBox
                            userClass="user-nav__user"
                            className="user-nav__user-photo"
                            alt="User photo"
                            src={UserImage}
                            spanClass="user-nav__user-name"
                            spanText="Jonas"


                        />
                    </UserNavbar>
                </Header>
                <Content>
                    <Sidebar>Navigation</Sidebar>
                    <HotelView>Hotel View</HotelView>
                </Content>

            </Container>
        )
    }
}

export default Home;