import React from 'react';
import axios from 'axios';

export class Update extends React.Component {

    constructor() {
        super();

        //binding the events, method onSubmit is called
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangePicture = this.onChangePicture.bind(this);

        //infomation on the clothing
        this.state = {
            Title: '',
            Price: '',
            Brand: '',
            Type: '',
            Picture: ''
        }
    }

    //update, componentDidMount executes when its active in view
    componentDidMount() {
        console.log(this.props.match.params.id);

        //asybchronous call
        axios.get('http://localhost:4000/api/clothes/' + this.props.match.params.id)
            .then(response => {
                //callback function
                this.setState({
                    _id: response.data._id,
                    Title: response.data.title,
                    Price: response.data.price,
                    Brand: response.data.brand,
                    Type: response.data.type,
                    Picture: response.data.picture
                })
            })
            .catch((error => {
                console.log(error);
            }));
    }

    //updates this state when title is inputted
    onChangeTitle(a) {
        this.setState({
            Title: a.target.value
        });
    }

    //updates price 
    onChangePrice(a) {
        this.setState({
            Price: a.target.value
        });
    }

    //updates brand
    onChangeBrand(a) {
        this.setState({
            Brand: a.target.value
        });
    }

    //updates type
    onChangeType(a) {
        this.setState({
            Type: a.target.value
        });
    }

    //updates picture
    onChangePicture(a) {
        this.setState({
            Picture: a.target.value
        });
    }

    //onSubmit method
    //applies an alert at the top of the screen
    onSubmit(a) {
        a.preventDefault();
        alert("Thanks for editing: " + this.state.Title + " " + this.state.Price + " " + this.state.Brand + " "
            + this.state.Type + " " + this.state.Picture + " in your shopping cart."
        )
        const newClothing = {
            Title: this.state.Title,
            Price: this.state.Price,
            Brand: this.state.Brand,
            Type: this.state.Type,
            Picture: this.state.Picture,
            _id: this.state._id
        }

        //finds id from mongodb and edits it
        axios.put('http://localhost:4000/api/clothes/' + this.state._id, newClothing)
            .then(res => {
                console.log(res.data)
            })
            .catch((error => {
                console.log(error);
            }));
        //     //asynchronous
        //     axios.post('http://localhost:4000/api/clothes',newClothing)
        //     .then((res)=> {
        //         console.log(res);
        //     })
        //     .catch((err)=>{
        //         console.log(err);
        //     });
    }
    //form to fill out clothes
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Clothing Item: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>

                    <div className="form-group">
                        <label>Add price for item</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Price}
                            onChange={this.onChangePrice}></input>
                    </div>

                    <div className="form-group">
                        <label>Add Brand</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Brand}
                            onChange={this.onChangeBrand}></input>
                    </div>

                    <div className="form-group">
                        <label>Add Type of Clothing</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Type}
                            onChange={this.onChangeType}></input>
                    </div>

                    <div className="form-group">
                        <label>Add image for shopping page</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Picture}
                            onChange={this.onChangePicture}></input>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value="Update/Edit"
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}