import React from 'react';
import { ClothingItem } from './clothingItem';

export class Apparel extends React.Component{

    //maps the clothes with the clothing item
    render(){
        return this.props.clothes.map((clothes) => {
            return <ClothingItem clothes={clothes} ReloadData={this.props.ReloadData}></ClothingItem>
        })
       
            // <div>
        //     <h1>Thus is my basket component</h1>
        //         {console.log(this.props.clothes )}
        //         <ClothingItem></ClothingItem>
        //         </div>
       // );
    }
}