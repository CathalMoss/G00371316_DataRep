import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class ClothingItem extends React.Component {

    constructor() {
        super();

        //binds the deleted clothing
        this.DeleteClothing = this.DeleteClothing.bind(this);
    }

    //DeleteCLothing method deletes the clothes
    DeleteClothing(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.clothes._id);

        axios.delete("http://localhost:4000/api/clothes/" + this.props.clothes._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
    }

    render() {
        return (
            <div>
                {/* <h1>This is my Clothing Item Component</h1>
                <h4> {this.props.clothes.Title}</h4>
                <p> {this.props.clothes.Year}</p>
                <h4> {this.props.clothes.Type}</h4> */}

                {/*title, brand and picture is only read in*/}
                <Card className="text-center">
                    <Card.Header>{this.props.clothes.Title}</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.props.clothes.Brand}<p></p>{this.props.clothes.Price}</Card.Title>
                        <Card.Text>
                            <img src={this.props.clothes.Picture} width="250" height="325"></img>
                        </Card.Text>
                    </Card.Body>
                    {/*a discount for everyone */}
                    <Card.Footer className="text-muted">20% Discount</Card.Footer>
                    {/*update and delete clothing buttons added */}
                    <Link to={"/update/" + this.props.clothes._id} className="btn btn-primary">Update/Edit</Link>
                    <Button variant="danger" onClick={this.DeleteClothing} >Delete</Button>
                </Card>
            </div>
        );
    }
}