import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slick.css"
import straps from "./data/straps";
import cases from "./data/cases";
import faces from "./data/faces";

const Watch = ({ setCurrentCaseHandler, setSelectedMarginHandle }) => {

    setTimeout(() => {
        setSelectedMarginHandle('5%')
    }, 1000)

    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        initialSlide: 0,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: (index) => setCurrentCaseHandler(index),
        swipeToSlide: true,
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
        <div>
            <div id="watch-slider">
                <Slider {...settings} >
                    {cases.map((x, index) => (
                        <div key={index} className="c-Watch c-Watch--42 u-relative u-flex u-items-center">

                            <div className="o-Img c-Watch_Item -straps -fakes js-fake-s" aria-hidden="true">
                                <img className="js-img -loaded" src={straps[index]} alt="" decoding="async" loading="lazy" draggable="false" data-load="loaded" />
                                <span className="c-Watch_WFBg u-absolute"></span>
                                <div className="o-Img c-Watch_Item -cases">
                                    <img className="js-img -loaded" src={x} alt="calibre e4 42 mm" loading="lazy" decoding="async" draggable="false" data-load="loaded" />
                                    <div className="o-Img c-Watch_Item -watchfaces -s42 -fakes js-fake-wf" aria-hidden="true">
                                        <img className="js-img -loaded" src={faces[index]} alt="" loading="lazy" decoding="async" draggable="false" data-load="loaded" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Watch;