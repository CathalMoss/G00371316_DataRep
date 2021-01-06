import React from 'react';
import Card from 'react-bootstrap/Card';

export class Children extends React.Component {

    render() {
        return (
            <div>
                {/*kids section of clothing*/}
                <Card.Header>Kids Halloween Costume</Card.Header>
                <Card.Body>
                    <Card.Title>DC<p></p>€55.00</Card.Title>
                    <Card.Text>
                        <img src="images/childclothes1.jpg" width="250" height="325"></img>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">In Stock: 198</Card.Footer>
            </div>
        );
    }
}