import { useEffect, useState } from "react";
import "./ImageSlider.css"
import { IoIosArrowBack } from "react-icons/io";
import gsap from 'gsap';

import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import img5 from '../../assets/5.png'
import img6 from '../../assets/6.png'


const imageArray = [img1, img2, img3, img4, img5, img6];

function ImageSlider() {

    const[midImage,setMidImage] = useState(0);
    const[rightImage,setRightImage] = useState(1);
    const[leftImage,setLeftImage] = useState(imageArray.length-1);

    useEffect(()=>{
        if(midImage == 0){
            setLeftImage(imageArray.length-1)
            setRightImage(1);
        }
        else if(midImage == imageArray.length-1)
        {
            setRightImage(0);
            setLeftImage(midImage-1);
        }
        else{
            setRightImage(midImage+1);
            setLeftImage(midImage-1);
        }

    },[midImage]);

    const Increment=()=>{
        if(midImage == imageArray.length-1){
            setMidImage(0);
        }
        else{
            setMidImage(midImage+1);
        }
        //----------------GSAP ANIMATIONS-------------------------
        gsap.fromTo('.middleImage',
            {x:-200,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );
        gsap.fromTo('.rightImage',
            {x:600,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );
        gsap.fromTo('.leftImage',
            {x:-500,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );
    }
    const Decrement=()=>{
        if(midImage == 0){
            setMidImage(imageArray.length-1);
        }
        else{
            setMidImage(midImage-1);
        }
        //----------------GSAP ANIMATIONS-------------------------
        gsap.fromTo('.middleImage',
            {x:200,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );
        gsap.fromTo('.rightImage',
            {x:600,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );
        gsap.fromTo('.leftImage',
            {x:-500,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );
    }

  return (
    <div className="ImageSlider" >
        <div className="ImageSliderContainter">
            <div className="Images">
                <img src={imageArray[rightImage]} className="rightImage" />
                <img src={imageArray[midImage]} className="middleImage" />
                <img src={imageArray[leftImage]} className="leftImage" />
            </div>
        </div>
        <div className="buttons">
            <button className="leftButton" onClick={()=>Decrement()}><IoIosArrowBack />
            </button>
            <button className="rightButton" onClick={()=>Increment()}><IoIosArrowBack />
            </button>
        </div>
        <div className="dotsPlace">
        {
            imageArray.map((_,index)=>(
                <div className={`dots ${index===midImage?'active':'passive'}`}></div>
            ))
        }
        </div>
    </div>
  )
}

export default ImageSlider