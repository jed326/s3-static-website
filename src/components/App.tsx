import React from "react";
import ReactPageScroller from "react-page-scroller";

import Landing from "./Landing";

import "../styles/App.css";

type PageState = {
    page: Number;
};

// Reference: https://github.com/VikLiegostaiev/react-page-scroller/blob/master/demo/src/FullPage.js

export default class App extends React.Component<{}, PageState> {
    constructor(props: {}) {
        super(props);
        this.state = { page: 0 };
    }

    handlePageChange = (nextPage: Number) => {
        this.setState({ page: nextPage });
    };

    render() {
        return (
            <div className="App">
                <ReactPageScroller>
                    <Landing></Landing>
                    <div>About Me</div>
                    <div>Work Experience</div>
                    <div>Projects</div>
                </ReactPageScroller>
            </div>
        );
    }
}
