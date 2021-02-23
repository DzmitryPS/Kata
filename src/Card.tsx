import React from 'react'
import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';





const Div = styled.div`
  background-color: white;
  /* height:  ${(checked) => checked ? '500px' : '302px'}; */
  width: 500px;  
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  margin-left: 20px;
  transition-property: height;
  transition: transform 0.3s ease-in-out;
  margin-top: 20px;

  .right_top{
      display: flex;
      justify-content:flex-end;
      margin-top: -40px;
  }
  .second_text{
    font-weight: bold;
    font-size: 13px;
    font-family: sans-serif;

  }
  .first_text{
    display:flex;
    justify-content:flex-start;
    padding-left: 20px;
    padding-top:30px;
    position: relative;
    
  }
  .bckg{
      color: gray;
      letter-spacing: 1px;
      font-size: 12px;
      font-family: fantasy;
  }
`;

const Main = styled.div`
 display: flex;
 justify-content:space-around;


.person{
   display: flex;
   margin-top: 10px;
   margin-left: 10px;

    img{
        border-radius:100%;
        height:45px ;
        margin-right: 8px;
    }
.name{
    font-size: 12px;
    font-weight:bold;
    margin-top: 0px;
}
.interactions{
    color: gray;
      letter-spacing: 1px;
      font-size: 12px;
      font-family: serif;
      margin-top: -5px;
      text-align: left;
}
}

.payments {
  display: grid;
  grid-template-columns: 131px 131px;
  grid-template-rows: 0.7fr 0.9fr;
  gap: 17px 17px;
  grid-template-areas:
    ". ."
    ". .";
 margin-top: 10px;
}
i{
    cursor:pointer;
    font-size: 70px;
    height: 70px;
    border: 1px solid #d2d2d2;
    border-radius: 5px;  

    :hover{
      background-color: #00bfff;
      transition: background 1s ease;
    }
}
.main-info{
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  margin-left: 10px;
p{
  margin-top: 5px;
}
.usual{
  font-size: 12px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}}
`;

const Path= styled.div`
.bottom_usual{
  font-size: 12px;
    font-weight:bold;
    margin-top: 0px;
    text-align: left;
}
.bottom_unusual{
  color: gray;
      letter-spacing: 1px;
      font-size: 12px;
      font-family: serif;
      margin-top: -5px;
      text-align: left;
}

.path{
  display: flex;
  width: 100%;
  margin-left: 145px;
}

.hr{
  border: none;
    background-color: gray;
    color: gray; 
    height: 2px; 
    width: 150px;
    margin: 20px 10px;
   }
}
.fa-check-circle{
  color: blue;
  font-size: 30px;

  :hover{
transform: rotate(-360deg) ;
transition: transform 1s ease;
}
}
.fa-map-marker-alt{
  color: green;
  font-size: 30px;

  :hover{
transform: rotate(-360deg) scaleX(-1);
transition: transform 1s ease;
}

}
.adress{
  display: flex;
  width: 100%;
  margin-left: 145px;
}
.point{
  margin-left: 90px;
}

hr{
  margin: auto 50px;
}
.more{
  display: flex;
justify-content: space-around;

.usual{
  font-size: 12px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-top: 20px;
}
.unusual{
  color: gray;
      letter-spacing: 1px;
      font-size: 12px;
      font-family: serif;
      text-align: left;
      margin-top: -10px;

};
`


type Person = {
    email: string | undefined;
    phone: string | undefined;
    location: string | undefined;
    image: string | undefined;
    start_name:string | undefined;
    start_street:string | undefined;
    end_point:string | undefined;
    end_street:string | undefined;
    distance:string | undefined;
    time:string | undefined;
    price:string | undefined;
    energy:string | undefined;
}

const Card = ({image,location, phone,email,start_name,start_street,end_point,end_street,distance,time,price,energy}: Person) => {

    const [state, setState] = React.useState({checkedB: true});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
    return (
        <Div >
            <header>
                <p className="first_text bckg">PASSENGER INFO</p>
                <div className="right_top">
                <p className='second_text'>Hide Information</p>
                <Switch className='switch'
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
           </div>        
            </header>
        <Main >
            <div>
            <div className="person">
              <>
              <img src={image}/> 
              <div className="person_info">
              <p className="name">Nora M. Buchanan</p>
              <p className="interactions">4 interactions</p>
              </div>
              </>
              
            </div>
            <div className="main-info">
                    <p className="mail bckg">EMAIL</p>
                    <p className="usual">{email}</p>
                    <p className="phone bckg">PHONE</p>
                    <p className="usual">{phone}</p>
                    <p className="location bckg">LOCATION</p>
                    <p className="usual">{location}</p>
              </div>
              </div>
            <div className="payments">
            <i className="fab fa-paypal"></i>
            <i className="fab fa-apple-pay"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-visa"></i>
            </div>
        </Main>
        { state.checkedB &&
        <Path>
          <div className="path">
             <div><i className="fas fa-check-circle"></i></div>
               <div className="hr"></div> 
            <div><i className="fas fa-map-marker-alt"></i></div>
        </div>
        <div className="adress">
          <div>
             <p className="bottom_usual">{start_name}</p>
             <p className="bottom_unusual">{start_street}</p>
          </div> 
          <div className="point">
            <p className="bottom_usual">{end_point}</p>
            <p className="bottom_unusual">{end_street}</p>
          </div>  
        </div>

    
        <hr/>
     
          <div className="more">
              <div>
              <p className="usual">{distance}</p>
              <p className="unusual">Distance</p>
              </div>
              <div>
              <p className="usual">{time}</p>
              <p className="unusual">Time</p>
              </div>
              <div>
              <p className="usual">{price}</p>
              <p className="unusual">Price</p>
              </div>
              <div>
              <p className="usual">{energy}</p>
              <p className="unusual">Energy</p>
              </div>
          </div>

        </Path>
}
        </Div>
    )
}

export default Card
