import React from 'react';
import Card from 'react-bootstrap/Card';
import { CreateAccount } from './createAccount';

export class AccountInfo extends React.Component {

    render() {
        return (
            <div><CreateAccount>
                <h1>This is my AccountInfo Component</h1>
                <h4> {this.props.Name}</h4>
                <p> {this.props.DOB}</p>
                <h4> {this.props.Email}</h4></CreateAccount>
            </div>

        );
    }

//     render(){
//         return this.props.account.map((account) => {
//             return <CreateAccount account={account}></CreateAccount>
//         })
// }
}