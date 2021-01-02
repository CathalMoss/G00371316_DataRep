import React from 'react';
import axios from 'axios';

export class addClothing extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangePicture = this.onChangePicture.bind(this);
        
        this.state = {
            Title: '',
            Price: '',
            Brand: '',
            Type: '',
            Picture: ''
        }
    }

    onChangeTitle(a) {
        this.setState({
            Title: a.target.value
        });
    }

    onChangePrice(a) {
        this.setState({
            Price: a.target.value
        });
    }

    onChangeBrand(a) {
        this.setState({
            Brand: a.target.value
        });
    }

    onChangeType(a) {
        this.setState({
            Type: a.target.value
        });
    }

    onChangePicture(a) {
        this.setState({
            Picture: a.target.value
        });
    }

    onSubmit(a) {
        a.preventDefault();
        alert("Title: " + this.state.Title + " " + this.state.Price + " " + this.state.Brand + " "
         + this.state.Type + " " + this.state.Picture 
        )
        const newClothing = {
            Title:this.state.Title,
            Price:this.state.Price,
            Brand:this.state.Brand,
            Type:this.state.Type,
            Picture:this.state.Picture
        }
        //asynchronous
        axios.post('http://localhost:4000/api/clothes',newClothing)
        .then((res)=> {
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    render() {
        return (
            <div className='App'>
                <h1>Add Items To Basket</h1>
                <b><p>Make sure you add all details in correctly for the Shopping Basket</p></b>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Title</label>
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
                            value="Add Clothing Item"
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}