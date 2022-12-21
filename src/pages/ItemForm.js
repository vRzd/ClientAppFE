import {Component} from "react";
import '../style/App.css';

class ItemForm extends Component {
    constructor(props) {
        super(props);

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeProducer = this.onChangeProducer.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: null,
            name: "",
            producer: "",
            price: "",

            submitted: false
        };
    };

    onChangeId(e) {
        this.setState({
            id: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeProducer(e) {
        this.setState({
            producer: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onSubmit = async () => {
        alert('ItemOperation save')
        const itemOperationDto = {
            "id": this.state.id,
            "name": this.state.name,
            "producer": this.state.producer,
            "price": this.state.price
        }
        const response = await
            fetch('http://0.0.0.0:8082/app/store/items/add', {
                method: "POST",
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    "id": this.state.id,
                    "name": this.state.name,
                    "producer": this.state.producer,
                    "price": this.state.price
                })
            })
                .then((response) => response.json())
                .then((response) => {
                    // setStatusMessage(response.status);
                })
                .catch(() => {
                    // setStatusMessage("ERROR");
                });
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Create New Item: </h2>
                </div>
                <div>
                    <form>
                        <br></br>
                        <label>
                            ID :
                            <input type="text" value={this.state.id} onChange={this.onChangeId}/>
                        </label>
                        <br></br>
                        <label>
                            Name:
                            <input type="text" value={this.state.name} onChange={this.onChangeName}/>
                        </label>
                        <br></br>
                        <label>
                            Producer:
                            <input type="text" id="itemId" value={this.state.producer}
                                   onChange={this.onChangeProducer}/>
                        </label>
                        <br></br>
                        <label>
                            Price:
                            <input type="text" id="itemId" value={this.state.price} onChange={this.onChangePrice}/>
                        </label>
                        <br></br>
                        <br></br>
                        <input type="submit" onClick={this.onSubmit}/>
                    </form>
                </div>
            </div>
        );
    }
}

export default ItemForm;
