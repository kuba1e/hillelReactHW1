import {Component, Fragment} from "react";
import Header from "../header";
import Section from "../section";
import SideBar from "../sidebar";
import './app.css'

export default class App extends Component {

  state ={
    isNavOpen: false
  }

  onBurgerClick =()=>{
    this.setState(({isNavOpen})=>({isNavOpen: !isNavOpen}))
  }

  render(){
    return(
      <Fragment>
        <Header isNavOpen ={this.state.isNavOpen} onBurgerClick = {this.onBurgerClick}/>
        <div className="container">
        <SideBar isNavOpen={this.state.isNavOpen}/>
        <Section/>
        </div>
      <Fragment/>
    ) 
  }
}
