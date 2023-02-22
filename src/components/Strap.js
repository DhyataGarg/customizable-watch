import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Slick.css'
import straps from './data/straps'
import d1 from '../assets/WebImages/dial/d1.png'
import f1 from '../assets/WebImages/faces/f1.png'

const Watch = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        swipeToSlide: true,
    }

    return (
        <div>
            <div className="watch-container">
                <Slider {...settings}>
                    {straps.map((strap, index) => (<div
                        class="c-Watch c-Watch--42 u-relative u-flex u-items-center"
                        id="slider_cases_0"
                    >


                        <div
                            className="o-Img c-Watch_Item -straps -fakes js-fake-s"
                            aria-hidden="true"
                        >
                            <img
                                key={index}
                                className="js-img -loaded"
                                src={strap}
                                alt=""
                                decoding="async"
                                loading="lazy"
                                draggable="false"
                                data-load="loaded"
                            />
                        </div>



                    </div>))}
                </Slider>

                <div
                    class="c-Watch c-Watch--42 u-relative u-flex u-items-center"
                    id="slider_cases_0"
                >
                    <span className="c-Watch_WFBg u-absolute"></span>
                    <div
                        className="o-Img c-Watch_Item -cases"
                        style={{ position: 'sticky' }}
                    >
                        <img
                            className="js-img -loaded"
                            src={d1}
                            alt="calibre e4 42 mm"
                            loading="lazy"
                            decoding="async"
                            draggable="false"
                            data-load="loaded"
                        />
                    </div>
                    <div
                        className="o-Img c-Watch_Item -watchfaces -s42 -fakes js-fake-wf"
                        aria-hidden="true"
                    >
                        <img
                            className="js-img -loaded"
                            src={f1}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            draggable="false"
                            data-load="loaded"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watch
