import React from "react";
import ReactDOM from "react-dom/client";

class TopUniversityList extends React.Component {
    render() {
        return (
            <div>List </div>
        )
    }
}
const rootElement = document.getElementById("welcome-unilist-container");
const root = ReactDOM.createRoot(rootElement);
root.render(<TopUniversityList/>);