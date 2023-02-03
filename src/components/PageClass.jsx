import React, { Component } from "react";

class PageClass extends Component {
    state = {
        count: 0,
        content: {
            button: (value) => {
                return (
                    <button onClick={() => this.handlePlus(value)}>+</button>
                );
            },
        },
    };

    handlePlus = (value) => {
        console.log("value=", value);
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <span>Class Component Count = {this.state.count}</span>
                {this.state.content.button(10)}
            </div>
        );
    }
}

export default PageClass;
