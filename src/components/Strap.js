import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Slick.css'
import straps from './data/straps'
import cases from './data/cases'
import faces from './data/faces'

const Watch = ({ selectedCase, setCurrentStrapHandler }) => {
    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        initialSlide: 0,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        afterChange: (index) => setCurrentStrapHandler(index),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    return (
        <div style={{ position: 'relative' }}>

            <div className='watch-container' id="parent">
                <Slider {...settings} infinite="true" className="slick-slider-parent" >
                    {straps.map((strap, index) => (
                        <div
                            className="c-Watch  u-relative u-flex u-items-center"
                            id="slider_cases_0"
                            key={index}
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
                                    style={{ zIndex: -1 }}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div

                id="floating"
                style={{ pointerEvents: 'none' }}
            >
                <Slider {...settings} infinite={false}>
                    <div
                        className="c-Watch u-relative u-flex u-items-center"
                        id="slider_cases_0"
                    >
                        <div
                            className="o-Img c-Watch_Item -straps -fakes js-fake-s"
                            aria-hidden="true"
                        >
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
                                <div
                                    className="o-Img c-Watch_Item -watchfaces -s42 -fakes js-fake-wf"
                                    aria-hidden="true"
                                >
                                    <img
                                        className="js-img -loaded"
                                        src={faces[selectedCase]}
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

                </Slider>
            </div>

        </div>
    )
}

export default Watch
