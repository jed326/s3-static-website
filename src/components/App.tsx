import React from "react";
import ReactPageScroller from "react-page-scroller";

import Landing from "./Landing";
import About from "./About";

import "../styles/App.css";

type PageState = {
    page: Number;
    loading: Boolean;
};

type LoaderProps = {
    showLoader: Function;
    hideLoader: Function;
};

// References:
// https://github.com/VikLiegostaiev/react-page-scroller/blob/master/demo/src/FullPage.js
// https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering

export default class App extends React.Component<LoaderProps, PageState> {
    constructor(props: LoaderProps) {
        super(props);
        this.state = { page: 0, loading: true };
    }

    handlePageChange = (nextPage: Number) => {
        this.setState({ page: nextPage });
    };

    componentDidMount() {
        this.props.hideLoader();
    }

    render() {
        return (
            <div className="App">
                <ReactPageScroller>
                    <Landing></Landing>
                    <About></About>
                    {/* <div>Work Experience</div> */}
                    {/* <div>Projects</div> */}
                </ReactPageScroller>
            </div>
        );
    }
}
