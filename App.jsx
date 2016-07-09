import React from 'react';
import Layout from './Layout.jsx';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    'id': 1,
                    'name': 'Foo',
                    'age': 20
                },
                {
                    'id': 2,
                    'name': 'Bar',
                    'age': 40
                },
                {
                    'id': 3,
                    'name': 'Baz',
                    'age': 3
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Content/>
                <Layout />
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}
                    </tbody>
                </table>
                <Head/>
                <Cont/>
            </div>
        );
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'header': 'Header form state....',
            'context': 'Context from state',
            'text': " hello jsx"
        }
    }

    render() {
        return (
            <div>
                <h3>Content</h3>
                <p>Here is content text</p>
                <div>
                    <Head headerProp={this.state.header}/>
                    <Cont contentProp={this.state.context + this.state.text}/>
                </div>
            </div>


        )
    }
}
class Head extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.headerProp}</h1>
            </div>
        )
    }
}
class Cont extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.contentProp}</h1>
            </div>
        )
    }
}
class TableRow extends React.Component {
    render() {

        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>

            </tr>
        )
    }
}
class DefaultProps extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.headerProp}</h4>
                <h5>{this.props.contentProp}</h5>
            </div>
        )
    }
}
App.defaultProps = {
    headerProp: 'Header from props.....',
    contentProp: 'Content from props'
}

