import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Testimonial.css';
import lady from '../../assets/Testimonial/alien.jpg';
import mike from '../../assets/Testimonial/alien.jpg';
import man from '../../assets/Testimonial/alien.jpg';
import daisy from '../../assets/Testimonial/alien.jpg';

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: 'bounceInRight',
    animateOut: 'bounceOutRight',
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={'Testimonial'}
        subHeading={'What My Client Say About Me'}
      />
      <section className='testimonial-section fade-in' id={props.id || ''}>
        <div className='container'>
          <div className='row'>
            <OwlCarousel
              className='owl-carousel'
              id='testimonial-carousel'
              {...options}
            >
              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img src={lady} alt='opp' />
                    <h5> text ever since </h5>
                    <p>text ever since </p>
                  </div>
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img src={mike} alt='opp' />
                    <h5> text ever since </h5>
                    <p>text ever since</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img src={man} alt='opp' />
                    <h5>text ever since</h5>
                    <p>text ever since</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img src={daisy} alt='opp' />
                    <h5>text ever since </h5>
                    <p>text ever since</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
