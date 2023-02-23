import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Slick.css'
import straps from './data/straps'
import cases from './data/cases'
import faces from './data/faces'

const Watch = ({ selectedCase, selectedStrap, setCurrentFaceHandler }) => {
    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        initialSlide: 0,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerPadding: 0,
        afterChange: (index) => setCurrentFaceHandler(index),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }


    return (
        <div style={{ position: 'relative' }}>
            <div className="watch-container" id="parent">
                <Slider {...settings} infinite={false}>
                    <div
                        className="c-Watch c-Watch--42 u-relative u-flex u-items-center"
                        id="slider_cases_0"
                    >
                        <div
                            className="o-Img c-Watch_Item -straps -fakes js-fake-s"
                            aria-hidden="true"
                        >
                            <img
                                className="js-img -loaded"
                                src={straps[selectedStrap]}
                                alt=""
                                decoding="async"
                                loading="lazy"
                                draggable="false"
                                data-load="loaded"
                            />
                        </div>

                        <span className="c-Watch_WFBg u-absolute"></span>
                        <div className="o-Img c-Watch_Item -cases">
                            <img
                                className="js-img -loaded"
                                src={cases[selectedCase]}
                                alt="calibre e4 42 mm"
                                loading="lazy"
                                decoding="async"
                                draggable="false"
                                data-load="loaded"
                            />
                        </div>
                    </div>
                </Slider>
            </div>

            <div id="floating">
                <Slider {...settings} className="slick-slider-float">
                    {faces.map((x, index) => (
                        <div
                            className="c-Watch c-Watch--42 u-relative u-flex u-items-center"
                            id="slider_cases_0"
                            key={index}
                        >
                            <div
                                className="o-Img c-Watch_Item -watchfaces -s42 -fakes js-fake-wf"
                                aria-hidden="true"
                            >
                                <img
                                    className="js-img -loaded"
                                    src={x}
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                    draggable="false"
                                    data-load="loaded"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Watch;
