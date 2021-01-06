import React from 'react';
import Card from 'react-bootstrap/Card';


export class Women extends React.Component {

  render() {
    return (
      <div>
        {/*Womans section, gives info on the clothing */}
        <Card.Header>Womans White T-Shirt</Card.Header>
        <Card.Body>
          <Card.Title>RedWood<p></p>€45.00</Card.Title>
          <Card.Text>
            <img src="images/woman2.jpg" width="250" height="325"></img>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">In Stock: 2</Card.Footer>

        <Card.Header>Womans Grey T-Shirt</Card.Header>
        <Card.Body>
          <Card.Title>StoneMill<p></p>€30.00</Card.Title>
          <Card.Text>
            <img src="images/liveitloveit.jpg" width="250" height="325"></img>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">In Stock: 6</Card.Footer>
      </div>
    );
  }
}