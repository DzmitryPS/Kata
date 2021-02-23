import React from 'react';
import Card from './Card';
import './App.css';
import Image1 from './images/image1.jpg';
import Image2 from './images/image2.jpg';
import Image3 from './images/image3.jpg';
import styled from 'styled-components';

const Div = styled.div`
display: flex;
flex-wrap:wrap;
`;

function App() {
  return (
    <Div className="App">
      <Card
      image={Image1}
      location={'New York, NY'}
      phone={'+144-3412-4422'}
      email={'invision@invisionapp.com'}
      start_name={'Jackson Heights'}
      start_street={'37-27 74th Street'}
      end_point={'Greenpoint'}
      end_street={'81 Gate St Brooklyn'}
      distance={'5km'}
      price={'$34'}
      time={'45min'}
      energy={'19kW'}
      />

<Card
      image={Image2}
      location={'New York, NY'}
      phone={'+3453-4534-67'}
      email={'galrd@list.ru'}
      start_name={'Dzmitry Piskun'}
      start_street={'37-67-3795 Street'}
      end_point={'Blakpoint'}
      end_street={'Golden Gate'}
      distance={'54km'}
      price={'$334'}
      time={'1h 55min'}
      energy={'119kW'}
      />

<Card
      image={Image3}
      location={'Minsk, Belarus'}
      phone={'+144-547-8799'}
      email={'myemail@mail.com'}
      start_name={'Donald Trump'}
      start_street={'34536 656 65 Street'}
      end_point={'Hollywood'}
      end_street={'Maliboo'}
      distance={'1km'}
      price={'$6'}
      time={'5min'}
      energy={'3kW'}
      />
    </Div>
  );
}

export default App;
