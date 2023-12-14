import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CustomArrow = ({onClick, direction}) => (
    <div className={'custom-arrow ' + direction} onClick={onClick}>
        {direction === 'prev' ? '⪡' : ' ⪢'}
    </div>
);

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next"/>,
    prevArrow: <CustomArrow direction="prev"/>,
};


const CustomSlider = ({images, className}) => {

    return (
        <div className={className}>
            <Slider {...sliderSettings}>
                {
                    images.map(
                        (img) => <img src={img} alt={img}></img>
                    )
                }

            </Slider>
            <div className="custom-dots">
                <Slider {...sliderSettings} />
            </div>
        </div>
    )
}

export default CustomSlider;