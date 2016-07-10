import React from 'react';

export default class Footer extends React.Component {
    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };

    forceUpdateHandler() {
        this.forceUpdate();
    };

    render() {
        var myStyle = {
            padding: 25
        }
        return (
            <div>
                <div style={myStyle}>
                    <button onClick={this.forceUpdateHandler}>Force UPDATE</button>
                    <h4>Random Number: {Math.random()}</h4>
                </div>
                <footer>This is the Footer</footer>
            </div>
        )
    }
}
