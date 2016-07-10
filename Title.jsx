import React from 'react';

export default class Title extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []


        }
        this.setStateHandler = this.setStateHandler.bind(this);
    };

    setStateHandler() {
        var item = 'setState...'
        var myArray = this.state.data;
        myArray.push(item)
        this.setState({
            data: myArray
        })
    };

    render() {
        return (
            <div>
                <h1>
                    {this.props.title}
                </h1>
                <button onClick={this.setStateHandler}>Set State</button>
                <h5>State Array: {this.state.data }</h5>

            </div>
        )
    }
}