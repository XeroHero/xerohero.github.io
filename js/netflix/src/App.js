import React from "react";
import Jumbotron from './components/jumbotron';
import jumboData from './fixtures/jumbo.json';

export default function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item ) =>(
        <Jumbotron direction={item.direction} key={item.id}  >
          <Jumbotron.Pane>
            <Jumbotron.Title >{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle >{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Image src={item.image} alt={item.alt}/>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

  