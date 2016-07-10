import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title.jsx';

export default class Header extends React.Component {
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render() {
        return (
            <div>
                <Title title={this.props.title}/>
                <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
                <DOM/>
            </div>
        )
    }
}
class DOM extends React.Component {
    constructor() {
        super();
        this.getDomNodeHandler = this.findDomNodeHandler.bind(this);
    };

    findDomNodeHandler() {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
    }

    render() {
        return (
            <div>
                <h2>DOM Node</h2>
                <button onClick={this.findDomNodeHandler}>FIND DOM NODE
                </button>
            <div id="myDiv">NODE
                <div id="myDiv">NODE</div></div>

            </div>
        )
    }
}

