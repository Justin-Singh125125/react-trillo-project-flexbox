import React from "react";

import Container from "../../layout/Container";
import Header from "../../layout/Header";
import Content from "../../layout/Content";
import Sidebar from "../../layout/Sidebar";
import HotelView from "../../layout/Hotel-View";



class Home extends React.Component {
    render() {
        return (
            <Container>
                <Header>Header part</Header>
                <Content>
                    <Sidebar>Navigation</Sidebar>
                    <HotelView>Hotel View</HotelView>
                </Content>

            </Container>
        )
    }
}

export default Home;