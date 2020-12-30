import React from 'react';

export class CreateAccount extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        
        this.state = {
            Name: '',
            DOB: '',
            Email: ''
        }
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    onChangeDOB(e) {
        this.setState({
            DOB: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Name: " + this.state.Name + " " + this.state.DOB + " " + this.state.Email)
    }
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Account Information: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Name}
                            onChange={this.onChangeName}></input>
                    </div>

                    <div className="form-group">
                        <label>Add dob</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.DOB}
                            onChange={this.onChangeDOB}></input>
                    </div>

                    <div className="form-group">
                        <label>email</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Email}
                            onChange={this.onChangeEmail}></input>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value="Add Name"
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}