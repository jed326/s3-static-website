import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { Row } from "antd";

import "../styles/About.css";

export default class About extends React.Component<{}, {}> {
    bodyContainerStyle = {
        background: "#949494",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
    };

    render() {
        return (
            <div className="About">
                <Row>
                    <div className="Title">About Me</div>
                </Row>
                <Row>
                    <Timeline className="Timeline">
                        <TimelineItem
                            key="001"
                            dateComponent={
                                <div className="Date">July 2020</div>
                            }
                            bodyContainerStyle={this.bodyContainerStyle}
                        >
                            <Row>
                                <h3 className="Job">
                                    Software Development Engineer, Amazon
                                </h3>
                                <h4>DC Metro Area</h4>
                            </Row>
                        </TimelineItem>
                        <TimelineItem
                            key="002"
                            dateComponent={
                                <div className="Date">
                                    June 2019 - August 2019
                                </div>
                            }
                            bodyContainerStyle={this.bodyContainerStyle}
                        >
                            <h3 className="Job">
                                Software Engineer Intern, Capital One
                            </h3>
                            <h4>DC Metro Area</h4>
                        </TimelineItem>
                        <TimelineItem
                            key="003"
                            dateComponent={
                                <div className="Date">
                                    June 2018 - August 2018
                                </div>
                            }
                            bodyContainerStyle={this.bodyContainerStyle}
                        >
                            <h3 className="Job">
                                Software Engineer Intern, JPMorgan Chase & Co.
                            </h3>
                            <h4>Wilmington, Delaware</h4>
                        </TimelineItem>
                        <TimelineItem
                            key="004"
                            dateComponent={
                                <div className="Date">
                                    August 2016 - May 2020
                                </div>
                            }
                            bodyContainerStyle={this.bodyContainerStyle}
                        >
                            <h3 className="Job">
                                B.S. Computer Science, B.S. Economics, The
                                Pennsylvania State University
                            </h3>
                            <h4>University Park, Pennsylvania</h4>
                        </TimelineItem>
                    </Timeline>
                </Row>
            </div>
        );
    }
}
