import {Component} from "react";
import '../style/App.css';

class ItemOperation extends Component {
    constructor(props) {
        super(props);
        this.state = {items: [{id: "0"}, {id: "2"}]};

        this.handleDelete = this.handleDelete.bind(this);
    };


    handleDelete = async () => {
        alert('handleDelete')
        await fetch('http://0.0.0.0:8082/app/store/items/delete?id=' + "1", {
            method: "DELETE",
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                "Content-Type": 'application/json'
            }
        })
            .then((response) => response.json())
            .then((response) => {
                // setStatusMessage(response.status);
            })
            .catch(() => {
                // setStatusMessage("ERROR");
            });
    }

    async componentDidMount() {
        await
            // fetch('store/items/getById?id=2',{
            fetch('http://0.0.0.0:8082/app/store/items/all', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then((response) => {

                response.json().then(json => {
                    this.setState({items: json});
                })
            })
                .catch(() => {

                });
    }



    render() {
        const listItems = this.state.items.map((item) =>

            <p key={item.id}> id={item.id}, name={item.name}, producer={item.producer}, producer={item.producer}</p>);
        return (
            <div className="App">
                <div className="App-header">
                    <h2>List items: </h2>
                    <div>
                        {
                            this.state.items.map((item) => {
                                    return <span key={item.id}> id={item.id},name={item.name}, producer={item.producer},
                                            producer={item.producer}
                                        <span><input type="submit" value="Update"/> </span>
                                        <span><input type="submit" value="Delete" onClick={this.handleDelete}/> </span>
                                    <br></br>
                                    </span>
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemOperation;
