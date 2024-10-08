"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { use } from "react";
import Slider from "react-slick";
import Image from "next/image";
import origami01 from "@/app/profile/components/images/origami01.jpg";
import origami02 from "@/app/profile/components/images/origami02.jpg";
import origami03 from "@/app/profile/components/images/origami03.jpg";

export default function SimpleSlider() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3500,
    
  };

  return (
    <Slider {...settings}>
      <div>
        <Image
          src={origami01}
          alt="origami01"
          width={1080}
          height={480}
          style={{ objectFit: "cover" ,margin:"0 auto"}}
        />
      </div>
      <div>
        <Image
          src={origami02}
          alt="origami02"
          width={1080}
          height={480}
          style={{ objectFit: "cover",margin:"0 auto"}}
        />
      </div>
      <div>
        <Image
          src={origami03}
          alt="origami03"
          width={1080}
          height={480}
          style={{ objectFit: "cover",margin:"0 auto"}}
        />
      </div>
    </Slider>
  );
}
