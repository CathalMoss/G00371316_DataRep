import React from 'react';
import { Apparel } from './Apparel';
import axios from 'axios';

export class Read extends React.Component {


    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this); 
    }
    state = {
        clothes:
            [/*
                {
                             "Title": "Mens Mixed T-Shirt",
                             "Price" : "€50.00",
                             "Brand": "Adidas",
                             "Type": "Black and White T-Shirt",
                             "Picture": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8dCUyMHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                             },
                           {
               
                               "Title": "Mens White T-Shirt",
                               "Price" : "€30.00",
                              "Brand": "Nike",
                              "Type": "T-Shirt",
                              "Picture": "https://images.unsplash.com/photo-1523647341782-d761bce0004c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHQlMjBzaGlydHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                           },
                           {
                               "Title" : "Womans White T-Shirt",
                               "Price" : "€45.00",
                               "Brand" : "RedWood",
                               "Type" : " Dreamer T-Shirt",
                               "Picture" : "https://images.unsplash.com/photo-1569033083669-a63ea13bc769?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHQlMjBzaGlydHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                           },
                           {
                              "Title" : "Womans Grey T-Shirt",
                              "Price" : "€30.00",
                               "Brand" : "StoneMill",
                               "Type" : " Live it, Love it",
                               "Picture" : "https://images.unsplash.com/photo-1542716283-b7c13b8952d0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHQlMjBzaGlydHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                           },
                           {
                               "Title" : "Kids Halloween Costume",
                               "Price" : "€55.00",
                               "Brand" : "DC",
                               "Type" : " The Joker and a Skeleton?",
                               "Picture" : "https://images.unsplash.com/photo-1603652338913-9d5ee527fc8d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fHQlMjBzaGlydCUyMGtpZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                         
                           }*/
               ]
    };

    // //the server reading data from the database
    // componentDidMount() {
    //     axios.get('https://jsonblob.com/api/jsonblob/62969eed-4a1c-11eb-91e7-6ba3349cf99c')
    //         .then((response) => {
    //                 this.setState({ clothes: response.data.Search })
    //             })
    //         .catch((error)=>{
    //             console.log(error)
    //         });
    // }
      //the server reading data from the database
      componentDidMount() {
        axios.get('http://localhost:4000/api/clothes')
            .then((response) => {
                    this.setState({ clothes: response.data })
                })
            .catch((error)=>{
                console.log(error)
            });
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/clothes')
        .then((response) => {
                this.setState({ clothes: response.data })
            })
        .catch((error)=>{
            console.log(error)
        });
    }

    render() {
        return (
            //links the clothing item to the apparel
            <div><h1>Shopping Cart</h1>
           <b> <p>These are the items you have in your Basket</p></b>
                <Apparel clothes={this.state.clothes} ReloadData={this.ReloadData}></Apparel>
            </div>
        );
    }
}