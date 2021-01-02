import React from 'react';
import Card from 'react-bootstrap/Card';

export class Men extends React.Component {

    render() {
        return (
            <div>
                        <Card className="text-center">
  <Card.Header>Mens Mixed T-Shirt</Card.Header>
  <Card.Body>
    <Card.Title>Adidas<p></p>€50.00</Card.Title>
    <Card.Text>
    <img src="images/man2.jpg" width="250" height="325"></img>
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted">In Stock: 5</Card.Footer>

  <Card.Header>Mens White T-Shirt</Card.Header>
  <Card.Body>
    <Card.Title>Nike<p></p>€35.00</Card.Title>
    <Card.Text>
    <img src="images/man1.jpg" width="250" height="325"></img>
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted">In Stock: 3</Card.Footer>
</Card>
            </div>
        );
    }
}