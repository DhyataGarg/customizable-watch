import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slick.css"
// import watches from "./watches";
import straps from "./data/straps";
import cases from "./data/cases";
import faces from "./data/faces";

const Watch = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    };


    return (
        <div>
            <div className="watch-container">
                <Slider {...settings}>
                    {cases.map((x, index) => (
                        <div key={index} class="c-Watch c-Watch--42 u-relative u-flex u-items-center" id="slider_cases_0">

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