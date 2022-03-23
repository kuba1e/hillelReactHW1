import { Component } from "react";
import './sidebar.css'

export default class SideBar extends Component {
  render() {
    const {isNavOpen} = this.props
    const navClass = isNavOpen?'nav active':'nav'
    return (
      <nav className={navClass}>
        <div className="nav__inner">
          <ul className="nav__list-items">
            <li className="nav__list-item"><a href="#">Home</a></li>
            <li className="nav__list-item"> <a href="#">Section</a></li>
            <li className="nav__list-item"><a href="#">Section</a></li>
            <li className="nav__list-item"><a href="#">Section</a></li>
            <li className="nav__list-item"><a href="#">Section</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
