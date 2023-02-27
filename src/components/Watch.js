import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slick.css"
import straps from "./data/straps";
import cases from "./data/cases";
import faces from "./data/faces";
import ColorThief from 'colorthief'

const Watch = ({ setCurrentCaseHandler, setSelectedMarginHandle, selectedCase, selectedStrap, isStrapSelected, setSelectedFace, setSelectedStrap }) => {
    const [initialCase, setInitialCase] = useState(selectedCase);
    setTimeout(() => {
        setSelectedMarginHandle('5%')
    }, 1000)

    var colorThief = new ColorThief();

    var image = document.getElementsByClassName('strap-img')[0];

    function handleImageLoad(index) {
        // console.log('Image loaded:', event.target);
        // Do something with the loaded image, such as update the state
        image = document.getElementsByClassName('strap-img')[index];
        console.log(index, image)


        // image.onload = () => {
        const color = colorThief.getColor(image);
        console.log('color', color)
        document.getElementById('watch-slider').style.backgroundColor = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
        // }
    }

    useEffect(() => {
        image = document.getElementsByClassName('strap-img')[0];
        image.onload = () => handleImageLoad(0);
    }, [])

    const settings = {
        dots: true,
        infinite: false,
        centerMode: true,
        initialSlide: initialCase,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: (index) => {
            handleImageLoad(index);
            setCurrentCaseHandler(index);
            setSelectedFace(index);
            setSelectedStrap(index)
        },
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
                                <img className="js-img -loaded strap-img" src={index === initialCase && isStrapSelected ? straps[selectedStrap] : straps[index]} alt="" decoding="async" loading="lazy" draggable="false" data-load="loaded" />
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