import "./App.css";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import blueimg from "./images/blueimg.png";
import FacebookIcon from "./images/FacebookIcon.png";
import GoogleIcon from "./images/GoogleIcon.png";
import logo from "./images/logo.png";
import saicon from "./images/saicon.png";
import axios from 'axios';

function App() {

  
  var bodyFormData = new FormData();


  bodyFormData.append("username", "dev@start-7.com");
  bodyFormData.append("password", "Dev@2021!");  





const [input, setInput] = React.useState({
  username: "",
  password: ""
});

const handleInputChange = function (e) {
  setInput({
    ...input,
    [e.target.name]: e.target.value,
  });
};


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    alert("Logged in!");
    axios({
      method: 'post',
      url: 'https://api-flordeemprendedora.start-7.com/api/auth/login/',
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data"},
  })
  .then(function (response) {
    localStorage.setItem('access_token', response.data.token)
    console.log(response.data.token);
  })
  .catch(function (error) {
      console.log(error);
  });
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="App">
      <header className="App-header">
        <Container style={{margin:'0px', padding:'0px'}} >
          
          <Row style={{display: "flex", justifyContent:"space-around"}}>
            <Col style={{width: "25%", display: "flex", alignItems: "start"}}>
              <div>
          <h1 style={{fontSize: "70px"}}>_</h1>
          <br/>
          <h1>Bem-vindo de volta!</h1>
          </div>
          <div style={{width:"60%", lineHeight: "26px"}}>
          <h2>
            Estamos felizes que esteja de volta para retomar seus projetos no
            Projetolist.
          </h2>
          </div>
              <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Group>
                      <Form.Control name="username" type="email" placeholder="E-mail" onChange={handleInputChange} style={{marginTop:'20px', borderColor:"#9EC2F6", height:"70px", width:"95%"}} />
                    </Form.Group>
                    <br/>
                    <Form.Group>
                      <Form.Control name="password" type="password" placeholder="Senha" onChange={handleInputChange} style={{marginTop:'20px', borderColor:"#9EC2F6", height:"70px", width:"95%"}} />
                    </Form.Group>
                  <br />
                </Row>
                <a href="/" style={{width:"95%"}}>Esqueceu sua senha?</a>
                <Row style={{display:"inline-flex", justifyContent: "center", width:"95%"}}>
                  <Button variant="primary" type="submit" style={{borderRadius:'100px', backgroundColor:"#5594EF", margin:"15px 0 15px 0", marginRight:"25px"}}>
                    <strong>Entrar</strong>
                  </Button>
                  <span>OU ENTRE COM</span>
                  <Col style={{display: "grid", justifyContent:"flex-end"}}>
                  <div className="fbbg">
                    <img src={FacebookIcon} alt="fbico"/>
                  </div>
                  </Col>
                  <Col>
                  <div className="gogbg">
                    <img src={GoogleIcon} alt="gogico" />
                  </div>
                  </Col>
                  <div className="contact" style={{textDecoration: "none"}}>
                  <a href="/" style={{marginTop:"40px", textDecoration:"none"}}>Ainda não tem uma conta? <strong> Cadastre-se</strong></a>
                  </div>
                </Row>
              </Form>
              </Col>
              <Col style={{width:"50%", display:"flex", flexDirection:"column", padding:"0px"}}>
          <div className="rectangle2">
          <div style={{display:"flex", flexDirection:"row", alignContent:"center", alignItems:"center"}}>
                <div style={{marginRight:"5em"}}>
                  <img style={{width: "204.18px", height: "62.6px"}} src={logo} alt="projeto"/>
                </div>
            <div style={{marginLeft:"5em"}}>
                  <a href="/" style={{color: "white"}}>Ajuda</a>

            </div>
          </div>
                <div>
              <img  style={{width: "521px", height: "397px", margin: "100px"}} src={blueimg} alt="blue placeholder"/>
              </div>
            <div style={{display:"flex",  alignContent:"center", alignItems:"center", marginTop:"30px"}}>
                <div style={{display:"flex", marginRight:"3em", alignItems:"center"}}>
                <span style={{color: "white", marginBottom:"20px"}}>© 2021, Projetolist</span>
                </div>
                <div style={{display:"flex", flexDirection:"row", marginLeft:"3em", alignItems:"center"}}>
                  <span style={{color: "white", marginRight:"10px", marginBottom:"20px"}}>UI/UX Design and Front-end by: </span>
                  <img style={{width:"30px", height:"25px"}}src={saicon} alt="saicono" />
                </div>
              </div>
            </div>
            </Col>
            </Row>
        </Container>
      </header>
    </div>
  );
}


export default App;
