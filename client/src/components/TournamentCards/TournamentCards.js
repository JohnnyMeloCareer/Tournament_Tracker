import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import './TournamentCards.css';

const TournamentCards = () => {
  return (
    <div>
      <Card>
         <CardImg top width="100%" src="https://cdn.wikimg.net/en/splatoonwiki/images/thumb/9/9a/Tournament_Leagues_Under_the_Ink.png/400px-Tournament_Leagues_Under_the_Ink.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Splatoon 2</CardTitle>
          <CardSubtitle>LUTI</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button color="info">Join</Button>
        </CardBody> 
      </Card>
    
    </div>
    
    
  );
};

export default TournamentCards;