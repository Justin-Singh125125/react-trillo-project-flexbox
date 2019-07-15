import React from "react";

//layouts
import Container from "../../layout/Container";
import Header from "../../layout/Header";
import Content from "../../layout/Content";
import HotelView from "../../layout/Hotel-View";


//main-components
import UserNavbar from "../../main-components/UserNavbar";
import SearchBar from "../../main-components/SearchBar";
import Logo from "../../main-components/Logo";
import Sidebar from "../../layout/Sidebar";
import SideNavbar from "../../main-components/Side-Navbar";
import Gallery from "../../main-components/Gallery";
import Overview from "../../main-components/Overview";


//sub-components
import UserNavbarIconBox from "../../sub-components/User-Navbar-Icon-Box";
import UserNavbarImage from "../../sub-components/User-Navbar-Image";

//images
import LogoImage from "../../img/logo.png";
import UserImage from "../../img/me.jpeg"

//svg sprites
import SvgIcons from '../../img/sprite.svg'






class Home extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <Logo src={LogoImage} alt="trillo logo" />

                    {/* do classes like this to make the component reusable */}
                    <SearchBar
                        //loads the icons in sprite notation
                        svgIcons={SvgIcons}
                        //an id that is associated with the sprite svg that we want
                        svgSelection="icon-magnifying-glass"
                    />
                    <UserNavbar>
                        <UserNavbarIconBox
                            spanText="7"
                            svgIcons={SvgIcons}
                            svgSelection="icon-bookmark"

                        />
                        <UserNavbarIconBox
                            spanText="13"
                            svgIcons={SvgIcons}
                            svgSelection="icon-chat"
                        />
                        <UserNavbarImage
                            alt="User photo"
                            src={UserImage}
                            spanText="Justin"
                        />
                    </UserNavbar>
                </Header>
                <Content>
                    <Sidebar>
                        <SideNavbar />
                    </Sidebar>
                    <HotelView>
                        <Gallery />
                        <Overview />
                    </HotelView>
                </Content>

            </Container>
        )
    }
}

export default Home;