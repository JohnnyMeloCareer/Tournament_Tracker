import React from 'react';
import './TournamentCards.css';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

const TournamentCards = () => {
  return (
    <div>
      <Card style={{backgroundColor: "white"}}>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <img width="100%" src="https://cdn.wikimg.net/en/splatoonwiki/images/thumb/9/9a/Tournament_Leagues_Under_the_Ink.png/400px-Tournament_Leagues_Under_the_Ink.png" alt="Card image cap" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default TournamentCards;
