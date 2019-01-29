import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import './TournamentCards.css';

const TournamentCards = () => {
  return (
    <div>
      <Card>
         <CardImg top width="100%" src="https://media.discordapp.net/attachments/275410596164403202/538571479130963979/stone_demo.PNG" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button color="info">Join</Button>
        </CardBody> 
      </Card>
    </div>
  );
};

export default TournamentCards;