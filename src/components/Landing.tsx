import React from "react";
import { Layout, Icon, Row, Col, Button } from "antd";

import "../styles/Landing.css";

const { Footer, Content } = Layout;

export default class Landing extends React.Component<{}, {}> {
    render() {
        return (
            <React.Fragment>
                <div className="Landing">
                    <Layout style={{ backgroundColor: "transparent" }}>
                        <Content className="Content">
                            <Row className="Intro">
                                <Col span={8}></Col>
                                <Col span={8}>
                                    <Row className="Greeting">I am</Row>
                                    <Row className="Name">Jay Deng</Row>
                                </Col>
                                <Col span={8}></Col>
                            </Row>
                        </Content>
                        <Footer className="Footer">
                            <Row type="flex" justify="center">
                                <Col span={3}>
                                    <Button
                                        href="https://www.linkedin.com/in/jed326/"
                                        target="_blank"
                                        type="link"
                                        icon="linkedin"
                                        className="Social-Icon"
                                    ></Button>
                                </Col>
                                <Col span={3}>
                                    <Button
                                        href="https://github.com/jed326"
                                        target="_blank"
                                        type="link"
                                        icon="github"
                                        className="Social-Icon"
                                    ></Button>
                                </Col>
                                <Col span={3}>
                                    <Button
                                        href="https://www.instagram.com/jaydeng14/"
                                        target="_blank"
                                        type="link"
                                        icon="instagram"
                                        className="Social-Icon"
                                    ></Button>
                                </Col>
                                <Col span={3}>
                                    <Button
                                        href="http://m.me/jaydeng01"
                                        target="_blank"
                                        type="link"
                                        icon="facebook"
                                        className="Social-Icon"
                                    ></Button>
                                </Col>
                            </Row>
                        </Footer>
                    </Layout>
                </div>
            </React.Fragment>
        );
    }
}
