import React, { Component } from "react";
import Slider from "react-slick";
import BasicExample from "./sliderCart";
import '../UI/slider.css'



export default class MultipleItems extends Component {
  
  constructor() {
    super();
    this.state = [
      {id:1,
      img:"https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?size=626&ext=jpg&ga=GA1.2.485833525.1670566031&semt=sph"
    },
    {
      id:2,
      img: "https://img.freepik.com/free-vector/flat-design-phone-different-perspectives_52683-52676.jpg?size=626&ext=jpg&ga=GA1.2.485833525.1670566031&semt=sph"
    }

    ]
  }
  
  render() {
    var settings = {
      className: "center",
      centerMode: true,
      centerPadding: "100px",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
      
        <Slider {...settings}>
          <div>
            {/* <BasicExample items={this.state}></BasicExample> */}
          </div>
          
        </Slider>
      </div>
    );
  }
}

