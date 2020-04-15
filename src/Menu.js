import React, { Component } from 'react';
import './styles/Menu.scss';
import {BREAKFAST_MENU} from "./constants/BreakfastMenu.js";
import {LUNCH_MENU} from "./constants/LunchMenu.js";
import {BAKERY_MENU} from "./constants/Bakery.js";
import LazyLoad from 'react-lazy-load';
import ImageLoader from "./ImageLoader.js";

class Menu extends Component {
  constructor(props){
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      menuType: "Breakfast",
      breakfastCategories: ["Oats", "Eggs", "Breakfast dishes"],
      lunchCategories: ["Sandwiches", "Bowls", "Lunch dishes"],
      categories: ["Oats", "Eggs", "Breakfast dishes"],
      breakfastItems: BREAKFAST_MENU,
      lunchItems: LUNCH_MENU,
      curMenu: BREAKFAST_MENU,
    };
  }

  selectMenuType = (type) => {
    let categories = type === "Breakfast" ? this.state.breakfastCategories
                        : this.state.lunchCategories;
    let curMenu = type === "Breakfast"? this.state.breakfastItems
                        : this.state.lunchItems;
    this.setState({
      menuType: type,
      categories: categories,
      curMenu: curMenu
    })
  }

  handleMouseHover = (index) => {
    let curMenu = this.state.curMenu;
    let curItem = curMenu[index];
    curItem.hover = !curItem.hover;
    curMenu[index] = curItem;
    this.setState({curMenu: curMenu});
  }

  render() {
    return (
        <div className="Menu">
          <div className="Menu-selector">
            <button className="Selector-text" onClick = {() => this.selectMenuType("Breakfast")}>
              Breakfast
            </button>
            <button className="Selector-text" onClick = {() => this.selectMenuType("Lunch")}>
              Lunch
            </button>
          </div>
          <h1 className="Menu-head">{this.state.menuType}</h1>
          <h2 className="Menu-subhead">{this.state.categories[0]}</h2>
          <div className = "Menu_row">
            {
              this.state.curMenu.map((item,index)=>{
                return(
                  item.category===this.state.categories[0]?
                  <div  key={index} className = "Menu_item"
                  onMouseEnter={() => this.handleMouseHover(index)}
                  onMouseLeave={() => this.handleMouseHover(index)}>
                    {item.hover?
                      <div>
                        <LazyLoad
                        debounce={false}
                        throttle={250}>
                          <ImageLoader src={item.image} className="Opaque_menu_photo"/>
                        </LazyLoad>
                        <p className="Description-text">{item.description}</p>
                      </div>
                      :
                      <img src={item.image} className="Menu_photo"/>
                    }
                    <p className="Item-caption">{item.name}</p>
                  </div> : null
                )
              })
            }
          </div>
          <h2 className="Menu-subhead">{this.state.categories[1]}</h2>
          <div className = "Menu_row">
            {
              this.state.curMenu.map((item,index)=>{
                return(
                  item.category===this.state.categories[1]?
                  <div  key={index} className = "Menu_item"
                  onMouseEnter={() => this.handleMouseHover(index)}
                  onMouseLeave={() => this.handleMouseHover(index)}>
                    {item.hover?
                      <div>
                        <LazyLoad
                        debounce={false}
                        throttle={250}>
                          <ImageLoader src={item.image} className="Opaque_menu_photo"/>
                        </LazyLoad>
                        <p className="Description-text">{item.description}</p>
                      </div>
                      :
                      <img src={item.image} className="Menu_photo"/>
                    }
                    <p className="Item-caption">{item.name}</p>
                  </div> : null
                )
              })
            }
          </div>
          <h2 className="Menu-subhead">{this.state.categories[2]}</h2>
          <div className = "Menu_row">
            {
              this.state.curMenu.map((item,index)=>{
                return(
                  item.category===this.state.categories[2]?
                  <div  key={index} className = "Menu_item"
                  onMouseEnter={() => this.handleMouseHover(index)}
                  onMouseLeave={() => this.handleMouseHover(index)}>
                    {item.hover?
                      <div>
                        <LazyLoad
                        debounce={false}
                        throttle={250}>
                          <ImageLoader src={item.image} className="Opaque_menu_photo"/>
                        </LazyLoad>
                        <p className="Description-text">{item.description}</p>
                      </div>
                      :
                      <img src={item.image} className="Menu_photo"/>
                    }
                    <p className="Item-caption">{item.name}</p>
                  </div> : null
                )
              })
            }
          </div>
        </div>
    );
  }
}

export default Menu;
