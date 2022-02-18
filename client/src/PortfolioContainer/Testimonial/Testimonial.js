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
                      ტექსტის ნაგლეჯს იმეორებენ ხოლმე, ამიტომ ეს პირველი
                      ნამდვილი გენერატორია. იგი რთული და მართებული სტრუქტურის
                      წინადადებების ასაწყობად 200-მდე ლათინური სიტყვისგან
                      შემდგარ ლექსიკონს იყენე
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
                    <h5> არასოდეს </h5>
                    <p>სიტყვების </p>
                  </div>
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여
                      민주평화통일자문회의를 둘 수 있다. 모든 국민은 언론·출판의
                      자유와 집회·결사의 자유를 가진다. 국가는 균형있는
                      국민경제의 성장 및 안정과 적정한 소득의 분배를 유지하고.
                      그 정치적 중립성은 준수된다.
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
                    <h5> 간첩죄의 </h5>
                    <p>신체의</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات
                      العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم
                      ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات
                      محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع
                      مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار
                      مقاطع
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
                    <h5> مضة في نص لوريم إيبسو </h5>
                    <p>إيبسوم </p>
                  </div>
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      Вел вулпутате инцоррупте ин, долор импердиет елаборарет ад
                      еум. Но яуи молестие перицулис омиттантур, цлита нумяуам
                      цу пер, легере путент детерруиссет ан сеа
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
                    <h5> утрояуе салутанди </h5>
                    <p>оффициис </p>
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
