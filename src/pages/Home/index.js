import React from "react";

//layouts
import Container from "../../layout/Container";
import Header from "../../layout/Header";
import Content from "../../layout/Content";
import HotelView from "../../layout/Hotel-View";
import Detail from "../../layout/Detail";
import Description from "../../layout/Description";
import UserReviews from "../../layout/User-Reviews";

//main-components
import UserNavbar from "../../main-components/UserNavbar";
import SearchBar from "../../main-components/SearchBar";
import Logo from "../../main-components/Logo";
import Sidebar from "../../layout/Sidebar";
import SideNavbar from "../../main-components/Side-Navbar";
import Gallery from "../../main-components/Gallery";
import Overview from "../../main-components/Overview";
import List from "../../main-components/List";
import Paragraph from "../../main-components/Paragraph";
import Recommend from "../../main-components/Recommend";

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
                        <Detail>
                            <Description>
                                <Paragraph
                                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate."
                                />
                                <Paragraph
                                    text="Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam."
                                />
                                <List />
                                <Recommend />
                            </Description>
                            <UserReviews>
                                User reviews
                            </UserReviews>
                        </Detail>
                    </HotelView>
                </Content>

            </Container>
        )
    }
}

export default Home;