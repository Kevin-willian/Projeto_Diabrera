<<<<<<< HEAD
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
=======
import { useState, useEffect } from "react";
import "./ImageSlider.css"
import { IoIosArrowBack } from "react-icons/io";



const image1 = "src/assets/produto_teste copy.jpg";
const image2 = "src/assets/Imagem-Quem-e-Voce.png";
const image3 = "src/assets/imagem-anjo.png";
const image4 = "src/assets/imagem-anjo-ou-demonio.png";
const image5 = "src/assets/imagem-de-cartas-carrossel.png";
const image6 = "src/assets/imagem-mulher-batom-vermelho.png";
const imageArray = [image1, image2, image3, image4, image5, image6];

function ImageSlider() {
    const[midImage, setMidImage] = useState(0);
    const[rightImage, setRightImage] = useState(1);
    const[leftImage, setLeftImage] = useState(imageArray.length-1);
>>>>>>> main

    useEffect(()=>{
        if(midImage == 0){
            setLeftImage(imageArray.length-1)
            setRightImage(1);
<<<<<<< HEAD
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
=======
        } else if(midImage == imageArray.length-1){
            setRightImage(0);
            setLeftImage(midImage-1);
        } else {
            setRightImage(midImage+1);
            setLeftImage(midImage-1);
        }
    },[midImage]);

    const Increment=()=>{
        if(midImage == imageArray.length-1) {
            setMidImage(0);
        } else {
            setMidImage(midImage+1)
        }
    }

    const Decrement=()=> {
        if(midImage == 0) {
            setMidImage(imageArray.length-1);
        } else {
            setMidImage(midImage-1);
        }
    }

    return (
        <div className="ImageSlider">
            <div className="ImageSliderContainer">
                <div className="Images">
                    <img src={imageArray[0]} className="rightImage" />
                    <img src={imageArray[midImage]} className="middleImage" />
                    <img src={imageArray[2]} className="leftImage" />
                </div>
            </div>
            <div className="buttons">
                <button className="rightButton" onClick={()=>Increment()} ><IoIosArrowBack /></button>
                <button className="leftButton" onClick={()=>Decrement()}><IoIosArrowBack /></button>
            </div>
            <div className="dotsPlace">
                {
                    imageArray.map((_, index) => (
                        <div className="dots"></div>
                    ))
                }
            </div>
                
        </div>
    )
>>>>>>> main
}

export default ImageSlider