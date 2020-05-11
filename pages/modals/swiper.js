import React from 'react';
import ReactDOM from 'react-dom';
import Swiper from 'react-id-swiper';
import Head from 'next/head'


class SimpleSwiper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      params: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          // クリックでページ移動するか
          clickable: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        renderPrevButton: () => <button className="swiper-button-prev"></button>,
        renderNextButton: () => <button className="swiper-button-next"></button>,
        spaceBetween: 30
      }
    }
  }

  render() {
    return(
      <div>
        <Head>
          <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css" />
        </Head>
        <Swiper  {...this.state.params}>
        {/* <Swiper> */}
        <img src="images/css_slides_01.jpeg" alt="slide01"/>
        <img src="images/css_slides_02.jpeg" alt="slide02"/>
        <img src="images/css_slides_03.jpeg" alt="slide03"/>
        <img src="images/css_slides_04.jpeg" alt="slide04"/>
        <img src="images/css_slides_05.jpeg" alt="slide05"/>
        </Swiper>
      </div>
    )
  };
}

export default SimpleSwiper;