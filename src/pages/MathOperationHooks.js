// import mathOperation from '../icon/49-plus-circle-outline.gif';
// import '../style/App.css';
// import {useState} from 'react';
//
// function MathOperationHooks() {
//     const [inputs, setInputs] = setInputs({});
//
//     const handleChange = (event) => {
//         const name = event.target.value;
//         const value = event.target.firstValue;
//         setInputs(values => ({values, [name]: value}))
//     }
//
//     const handleSubmit = (event) => {
//         event.preventDefault()
//         sentRequest();
//     }
//
//
//     async function sentRequest() {
//         const response = await
//             fetch('/calculate/local' +
//                 '?firstValue=' + this.state.firstValue +
//                 '&secondValue=' + this.state.secondValue +
//                 '&mathOperationType=' + this.state.operation, {
//                     method: 'GET',
//                     headers: {
//                         Accept: 'application/json',
//                         'Content-Type': 'application/json',
//
//                     }
//                 }
//             );
//         const body = await response.json();
//         this.setState({operationResult: body.value});
//     }
//
//     function render() {
//         return (
//             <div className="App">
//                 <div className="App-header">
//                     <h2>Math operation Hooks<img src={mathOperation} className="Operation-logo" alt="logo"/></h2>
//                 </div>
//                 <div>
//                     <form>
//
//                         <br></br>
//                         <label>
//                             First value:
//                             <input type="text" id="firstValueId" value={inputs.firstValue || ""}
//                                    onChange={handleChange}/>
//                         </label>
//                         <label>
//                             <select value={inputs.operation || ""} onChange={handleChange}>
//                                 <option value="PLUS">+</option>
//                                 <option value="SUBTRACT">-</option>
//                                 <option value="MULTIPLY">*</option>
//                                 <option value="DIVIDE">/</option>
//                             </select>
//                         </label>
//                         <label>
//                             <input type="text" id="secondValueId" value={inputs.secondValue || ""}
//                                    onChange={handleChange}/>
//                         </label>
//                         <br></br>
//                         <br></br>
//                         <input type="submit" id="submitLocalCalculationId" value="Local calculation"
//                                onClick={handleSubmit}/>
//                         <input type="submit" id="submitDistributedCalculationId" value="Distributed calculation"
//                                onClick={this.handleDistributedCalculationSubmit}/>
//                         <input type="submit" value="Reset" onClick={this.handleReset}/>
//                     </form>
//                     <span>Operation result </span>
//                     <span>{this.state.operationResult}</span>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default MathOperationHooks;
