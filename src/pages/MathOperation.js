import mathOperation from '../icon/49-plus-circle-outline.gif';
import {Component} from "react";
import '../style/App.css';

class MathOperation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstValue: '',
            secondValue: '',
            operation: 'PLUS',
            operationResult: ''
        };

        this.handleChangeFirstValue = this.handleChangeFirstValue.bind(this);
        this.handleChangeSecondValue = this.handleChangeSecondValue.bind(this);
        this.handleChangeOperation = this.handleChangeOperation.bind(this);

        this.handleLocalCalculationSubmit = this.handleLocalCalculationSubmit.bind(this);
        this.handleLocalCalculationSubmit = this.handleDistributedCalculationSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
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


    handleLocalCalculationSubmit(event) {
        alert('firstValue ' + this.state.firstValue + ' secondValue' + this.state.secondValue + ' operation' + this.state.operation)
        this.componentDidMount();
        event.preventDefault();
    }

    handleDistributedCalculationSubmit(event) {
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

    handleReset(event) {
        this.setState({
            firstValue: '',
            secondValue: '',
            operation: 'PLUS',
            operationResult: ''
        });

        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Math operation <img src={mathOperation} className="Operation-logo" alt="logo"/></h2>
                </div>
                <div>
                    <form >

                        <br></br>
                        <label>
                            First value:
                            <input type="text" id="firstValueId" value={this.state.firstValue} onChange={this.handleChangeFirstValue}/>
                        </label>
                        <label>
                            <select value={this.state.value} onChange={this.handleChangeOperation}>
                                <option value="PLUS">+</option>
                                <option value="SUBTRACT">-</option>
                                <option value="MULTIPLY">*</option>Ω
                                <option value="DIVIDE">/</option>
                            </select>
                        </label>
                        <label>
                            <input type="text" id="secondValueId" value={this.state.secondValue} onChange={this.handleChangeSecondValue}/>
                        </label>
                        <br></br>
                        <br></br>
                        <input type="submit" id="submitLocalCalculationId" value="Local calculation" onClick={this.handleLocalCalculationSubmit}/>
                        <input type="submit" id="submitDistributedCalculationId" value="Distributed calculation" onClick={this.handleDistributedCalculationSubmit}/>
                        <input type="submit" value="Reset" onClick={this.handleReset}/>
                    </form>
                    <span>Operation result </span>
                    <span>{this.state.operationResult}</span>
                </div>
            </div>
        );
    }
}

export default MathOperation;
