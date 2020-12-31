import React from 'react';
import axios from 'axios';

export class Update extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangePicture = this.onChangePicture.bind(this);
        
        this.state = {
            title: '',
            price: '',
            brand: '',
            type: '',
            picture: ''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/clothes/' + this.props.match.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                Title:response.data.title,
                Price:response.data.price,
                Brand:response.data.brand,
                Type:response.data.type,
                Picture:response.data.picture
            })
        })
        .catch((error)=>{
            console.log(error);
        });
    
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
            title:this.state.Title,
            price:this.state.Price,
            brand:this.state.Brand,
            type:this.state.Type,
            picture:this.state.Picture,
            _id:this.state._id
        }

       axios.put('http://localhost:4000/api/clothes/' + this.state._id, newClothing)
       .then(res => {
           console.log(res.data)
       })
       .catch();
    //     //asynchronous
    //     axios.post('http://localhost:4000/api/clothes',newClothing)
    //     .then((res)=> {
    //         console.log(res);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     });
    }
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