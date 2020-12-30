import React from 'react';
import { Apparel } from './Apparel';
import axios from 'axios';

export class Read extends React.Component {


    state = {
        clothes:
            []
    };

    //the server reading data from the database
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/62969eed-4a1c-11eb-91e7-6ba3349cf99c')
            .then((response) => {
                    this.setState({ clothes: response.data.Search })
                })
            .catch((error)=>{
                console.log(error)
            });
    }

    render() {
        return (
            //links the clothing item to the apparel
            <div><h1>Mens, Womens and Childrens Clothes</h1>
                <Apparel clothes={this.state.clothes}></Apparel>
            </div>
        );
    }
}