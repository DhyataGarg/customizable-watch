import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Slick.css'
import straps from './data/straps'
import cases from './data/cases'
import faces from './data/faces'
import ColorThief from 'colorthief'

const Watch = ({
    selectedCase,
    setCurrentStrapHandler,
    currentMargin,
    setSelectedMarginHandle,
    setIsStrapSelected,
    selectedStrap,
    selectedFace,
}) => {
    document.documentElement.style.setProperty('--my-variable', currentMargin)

    setTimeout(() => {
        setSelectedMarginHandle('10%')
    }, 1000)

    var colorThief = new ColorThief()

    var image = document.getElementById('strap-img')

    function handleImageLoad(index) {
        image = document.getElementsByClassName('strap-img')[index]


        const color = colorThief.getColor(image)
        document.getElementsByClassName('strap-slider')[0].style.backgroundColor =
            'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')'
    }

    useEffect(() => {
        image = document.getElementsByClassName('strap-img')[selectedStrap]
        image.onload = () => handleImageLoad(selectedStrap);
        setIsStrapSelected(true)
    }, [])

    const settings = {
        dots: true,
        infinite: false,
        centerMode: true,
        initialSlide: selectedStrap,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,

        appendDots: (dots) => <div className="thumbnail">{dots}</div>,
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

    const settings1 =
    {
        afterChange: (index) => {
            handleImageLoad(index)
            setCurrentStrapHandler(index)
        },
    }

    return (
        <div style={{ position: 'relative' }} className="strap-slider">
            <div id="parent">
                <Slider {...settings} {...settings1}>
                    {straps.map((strap, index) => (
                        <div
                            className="c-Watch u-relative u-flex u-items-center"
                            key={index}
                        >
                            <div
                                className="o-Img c-Watch_Item -straps -fakes js-fake-s"
                                aria-hidden="true"
                            >
                                <img
                                    key={index}
                                    className="js-img -loaded strap-img"
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

            <div id="floating" style={{ pointerEvents: 'none' }}>
                <Slider {...settings} infinite={false}>
                    <div className="c-Watch u-relative u-flex u-items-center">
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
                                    src={faces[selectedFace]}
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                    draggable="false"
                                    data-load="loaded"
                                />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Watch
