import stringOperation from '../icon/35-edit-outline.gif';
import {Component} from "react";
import '../style/App.css';

class StringOperation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstValue: '',
            secondValue: '',
            operation: 'CONCAT',
            operationResult: ''
        };

        this.handleChangeFirstValue = this.handleChangeFirstValue.bind(this);
        this.handleChangeSecondValue = this.handleChangeSecondValue.bind(this);
        this.handleChangeOperation = this.handleChangeOperation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChangeFirstValue(event) {
        this.setState({
            firstValue: event.target.value
        });
    }

    handleChangeSecondValue(event) {
        this.setState({
            secondValue: event.target.value
        });
    }

    handleChangeOperation(event) {
        this.setState({
            operation: event.target.value
        });
        alert(' operation' + this.state.operation)
    }


    handleSubmit(event) {
        alert('firstValue ' + this.state.firstValue + ' secondValue' + this.state.secondValue + ' operation' + this.state.operation)
        this.componentDidMount();
        event.preventDefault();
    }

    async componentDidMount() {
        const response = await
            fetch('/calculate/local' +
                '?firstValue=' + this.state.firstValue +
                '&secondValue=' + this.state.secondValue +
                '&mathOperationType=' + this.state.operation, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',

                    }
                }
            );
        const body = await response.json();
        this.setState({operationResult: body.value});
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h3>String operation <img src={stringOperation} className="Operation-logo" alt="logo"/></h3>
                </div>
                <div>
                    <form>
                        <br></br>
                        <label>
                            First value:
                            <input type="text" value={this.state.firstValue} onChange={this.handleChangeFirstValue}/>
                        </label>
                        <label>
                            <select value={this.state.value} onChange={this.handleChangeOperation}>
                                <option value="CONCAT">Concatenation</option>
                                <option value="SUBTRACT">SUBTRACT</option>
                                <option value="FIRST_INDEX_OF">FIRST_INDEX_OF</option>
                            </select>
                        </label>
                        <label>
                            <input type="text" value={this.state.secondValue} onChange={this.handleChangeSecondValue}/>
                        </label>
                        <br></br>
                        <br></br>
                        <input type="submit" value="Local calculation" onSubmit={this.handleSubmit}/>
                        <input type="submit" value="Distributed calculation" onSubmit={this.handleSubmit}/>
                    </form>
                    <span>Operation result </span>
                    <span>{this.state.operationResult}</span>
                </div>
            </div>
        );
    }
}

export default StringOperation;
