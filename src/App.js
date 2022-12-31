import { useState } from 'react';
import logo from './logo.svg';
import {Navbar, Nav , Container , Form, FormControl , NavDropdown , Button , Modal} from 'react-bootstrap'
import {IoMdSettings , IoIosArrowDown} from 'react-icons/io'
import {GiBackwardTime} from 'react-icons/gi'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {FcCheckmark} from 'react-icons/fc'

import './App.css';

function App() {

  const [fromCurr, setFromCurr] = useState("Select a currency");
  const [toCurr, setToCurr] = useState("Select a Token");
  const [showModal , setShowModal] = useState(false);
  const [matchTokenList , setMatchTokenList] = useState();

  const tokenList = [
    {
      title: 'MMF',
      detail: "Mad Meerket Finance Token",
      address: "0x97749c9B61F878a880DfE312d2594AE07AEd7656",
      icon: "MMF1.webp"
    },
    {
      title: 'MMO',
      detail: "Mad Meerkat Optimizer Token",
      address: "0x50c0c5bda591bc7e89a342a3ed672fb59b3c46a7",
    },
    {
      title: 'METF',
      detail: "METF Token",
      address: "0xb8df27c687c6af9afe845a2afad2d01e199f4878",
    },
    {
      title: 'SVN',
      detail: 'SVN Token',
      address: '0x654bac3ec77d6db497892478f854cf6e8245dca9',
    },
    {
      title: 'MSHARE',
      detail: 'MSHARE Token',
      address: '0xf8b9facb7b4410f5703eb29093302f2933d6e1aa',
    },
    {
      title: 'MAD',
      detail: 'MAD Bucks',
      address: '0x212331e1435a8df230715db4c02b2a3a0abf8c61',
    },
    {
      title: 'WCRO',
      detail: 'Wrapped CRO',
      address: '0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23',
    },
    {
      title: 'AGO',
      detail: 'Agora Token',
      address: '0x383627CaeC2CE3b36793c34B576B2e97BEDA0466',
    },
    {
      title: 'BETIFY',
      detail: 'Betify Token',
      address: '0xD465b6B4937D768075414D413e981Af0b49349Cc',
    },
    {
      title: 'CRK',
      detail: 'Croking Token',
      address: '0x065DE42E28E42d90c2052a1B49e7f83806Af0e1F',
    },
    {
      title: 'CROGE',
      detail: 'CROGE Coin',
      address: '0xC4a174cCb5fb54a6721e11e0Ca961e42715023F9',
    },
    {
      title: 'CROISSANT',
      detail: 'CROISSANT Token',
      address: '0xa0c3c184493f2fae7d2f2bd83f195a1c300fa353',
    },
    {
      title: 'CROKI',
      detail: 'Croki Token',
      address: '0x43e90012a3d69AeBdc2750424b41655776c6D598',
    },
    {
      title: 'CROLAMBOS',
      detail: 'CROLAMBOS Token',
      address: '0x2a96a67c3bc9063991127d475d0cfcb0e86a2e5c',
    },
    {
      title: 'CROMOON',
      detail: 'Cro Moon Token',
      address: '0x7D30c36f845d1dEe79f852abF3A8A402fAdF3b53',
    },
    {
      title: 'CROTAMA',
      detail: 'CROTAMA Token',
      address: '0x4c76a10A658d71AdB6431765a0a3cA13B6e2D491',
    },
    // {
    //   title: 'CROW',
    //   detail: 'CrowCoin',
    //   address: '0x285c3329930a3fd3C7c14bC041d3E50e165b1517',
    // },
    {
      title: 'GAUR',
      detail: 'Gaur Money Token',
      address: '0x046cb616d7a52173e4Da9efF1BFd590550aa3228',
    },
    {
      title: 'MIMAS',
      detail: 'MIMAS Token',
      address: '0x10C9284E6094b71D3CE4E38B8bFfc668199da677',
    },
    {
      title: 'NESS',
      detail: 'NESS Coin',
      address: '0xE727240728C1a5f95437b8b50AFDd0EA4AE5F0c8',
    },
    {
      title: 'PES',
      detail: 'PES Dollar Token',
      address: '0x8EfBaA6080412D7832025b03B9239D0be1e2aa3B',
    },
    {
      title: 'Phenix',
      detail: 'Phenix Finance',
      address: '0x57d06bB1e3B60C875cD3A4445a53217F9B44d390',
    },
    {
      title: 'SINGLE',
      detail: 'SINGLE Token',
      address: '0x0804702a4e749d39a35fde73d1df0b1f1d6b8347',
    },
    {
      title: 'Sky',
      detail: 'DARKCRYPTO SHARE Token',
      address: '0x9d3bbb0e988d9fb2d55d07fe471be2266ad9c81c',
    },
    // {
    //   title: 'SPHERE',
    //   detail: 'SPHERE Token',
    //   address: '0xD6597AA36DD90d7fCcBd7B8A228F2d5CdC88eAd0.',
    // },
  ]

  const onExchange = () => {
    let from = fromCurr;
    let to = toCurr;
    setFromCurr(to);
    setToCurr(from);
  }

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleTokenChange = (tokendata) => {
    setToCurr(tokendata)
    handleClose()
  }
  
  return (
    <div className="App">
      <div className="warn-section container-fluid p-0 m-0" style={{ background: "linear-gradient(rgb(245, 217, 139), rgb(187, 147, 36))" }}>
        <div className="row text-center m-auto" >
          <h5 className="m-auto p-3">PHISHING WARNING Please make sure you are visiting <span className='white-text'>https://mm.finance</span> -check URL carefully</h5>
          <span style={{position : 'absolute', marginLeft : '48%', marginTop : '1%', cursor : 'pointer'}}>x</span>
        </div>
      </div>
      <Navbar style={{background : '#363636'}} expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home" className='white-text'>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            MMF
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {/* <Nav.Link href="#action1" className='white-text'>Trade</Nav.Link>
              <Nav.Link href="#action2" className='white-text'>EARN</Nav.Link>
              <Nav.Link href="#action2" className='white-text'>Defi</Nav.Link>
              <Nav.Link href="#action2" className='white-text'>Launch</Nav.Link>
              <Nav.Link href="#action2" className='white-text'>Games</Nav.Link> */}
            </Nav>
            <div className="d-flex p-2">
              {/* <input /> */}
              {/* <FcCheckmark size={70} style = {{height : '30'}} className = 'mx-3'></FcCheckmark> */}
              {/* <h5 className='white-text px-3'>Audit</h5> */}
              <IoMdSettings size={70} style = {{height : '30', color : 'white'}}  className = 'mx-3'></IoMdSettings>
              <Button className='custom_btn '>Connect Wallet</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="main-section container-fluid">
        <div className="row mt-0 pt-0">
          <div className="work-section text-start">
            <div className="row p-3">
              <div className='col-md-8'>
                <h3 className="pl-3">Exchange</h3>
                <p className="pl-3 grey-text">Trade tokens in an instant</p>
              </div>
              <div className='col-md-4 d-flex justify-content-between'>
              <IoMdSettings size={70} style = {{weight : '40' , height : '40', color : 'rgb(187, 147, 36)'}}></IoMdSettings>
              <GiBackwardTime size={40}></GiBackwardTime>
              </div>
            </div>
            <div className="row divide">
            </div>
            <div className="row from_section my-4 mx-3 p-2">
              <p>From</p>
              <div className="col-md-3 text-start">
                <p className="pl-3 grey-text">0.0</p>
              </div>
              <div className="col-md-9 text-end">
                {fromCurr}<IoIosArrowDown className = "mx-2"></IoIosArrowDown>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-md-3 text-center p-0">
                <Button className="btn btn-primary btn-sm custom_btn my-2">25%</Button>
              </div>
              <div className="col-md-3 text-center p-0">
                <Button className="btn btn-primary btn-sm custom_btn my-2">50%</Button>
              </div>
              <div className="col-md-3 text-center p-0">
                <Button className="btn btn-primary btn-sm custom_btn my-2">75%</Button>
              </div>
              <div className="col-md-3 text-center p-0">
                <Button className="btn btn-primary btn-sm custom_btn my-2">MAX</Button>
              </div>
            </div>
            <div className="row mt-3 text-center">
              <AiOutlineArrowDown onClick={onExchange}></AiOutlineArrowDown>
            </div>
            <div className="row from_section my-4 mx-3 p-2">
              <p>To</p>
              <div className="col-md-3 text-start">
                <p className="pl-3 grey-text">0.0</p>
              </div>
              <div className="col-md-9 text-end" onClick={handleShow} style = {{cursor : 'pointer'}}>
                <img src=''/>{toCurr}<IoIosArrowDown className = "mx-2"></IoIosArrowDown>
              </div>
              <Modal show={showModal} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton style={{background : "rgb(48, 48, 48)"}}>
                  <Modal.Title className='white-text'>Select a Token</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Control
                    type="email"
                    placeholder="Search name or paste address"
                    autoFocus
                  />
                  <div styles={{ height: '500px', overflowY: 'scroll'}} className="mt-3">
                    {tokenList.map(token =>
                      <div className='row' onClick={(e) => handleTokenChange(token.title)}>
                        <div className='col-md-2'>
                          <img src={require(`./assets/${token.title}1.webp`)} style = {{width : "50px", height : "50px", borderRadius : '100%'}}/>
                        </div>
                        <div className='col-md-10'>
                          <h5 className='white-text'>{token.title}</h5>
                          <p className='white-text'>{token.detail}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </Modal.Body>
              </Modal>
            </div>
            <div className="row mb-4">
              <div className="col-md-12 text-center pt-3">
                <Button className="custom_connect_btn"><h4>Connect Wallet</h4></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
