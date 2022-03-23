import { Component } from "react";
import './header.css'


export default class Header extends Component {


  render() {

    const {isNavOpen, onBurgerClick} = this.props

    const burgerClass = isNavOpen?'header__burger active':'header__burger'

    return (
      <header className="header">
        <div className="header__inner">
          <div className="header__logo">
            <h2 className="header__logo-text"><a href="#">My company</a></h2>
          </div>
          <div className="header__control" onClick={onBurgerClick}>
            <div className={burgerClass} >
              <span className='header__burger-item'></span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
