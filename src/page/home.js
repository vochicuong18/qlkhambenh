import React,{ Component } from 'react';
import './assets/home.css'
import './assets/phone.css'
import Carsousel from '../components/Home/Carsousel'
import FrmDatLich from '../components/Home/frmDatLich';
import Services from '../components/Home/Services';
import Post from '../components/Home/Post';
import Footer from '../components/Default/Footer';
import Sercal from '../components/Home/SerCal';
import TrieuChung from '../components/TrieuChung';
import Header from '../components/Default/Header';
import MessengerCustomerChat from 'react-messenger-customer-chat';


class Home extends Component {
  render () {
    return (
      <div className="body">
        <Header></Header>
        <Carsousel></Carsousel>
        <TrieuChung></TrieuChung>
        <div className="container">
          <FrmDatLich></FrmDatLich> 
        </div>
        
        <Services></Services>
        <Sercal></Sercal>
        <Post></Post>
        <Footer></Footer>
        <MessengerCustomerChat pageId="108380881327643" appId="311999750359473"/>
      </div>
    )

  };
}

export default Home;
