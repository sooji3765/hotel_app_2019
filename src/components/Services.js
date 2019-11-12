import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan , FaBeer} 
from 'react-icons/fa'

export default class Services extends Component {

   state ={
       services : [
           {
               icon :<FaCocktail/>,
               title :"Free cocktails",
               info :'lorem'
           },
           {
                icon :<FaHiking/>,
                title :"Endless Hiking",
                info :'lorem'
            },
            {
                icon :<FaShuttleVan/>,
                title :"Free Shuttle",
                info :'lorem'
            },
            {
                icon :<FaBeer/>,
                title :"Strongest Beer",
                info :'lorem'
            },
       ]
   } 
  render() {
    return (
      <section className="services">
          <Title title="services" />
          <div className="services-center">
            {this.state.services.map((item,index) => { 
               return <article 
                    key={index}
                    className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p> 
                </article>
               
            })}
          </div>
      </section>
    );
  }
}
