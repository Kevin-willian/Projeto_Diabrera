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

    useEffect(()=>{
        if(midImage == 0){
            setLeftImage(imageArray.length-1)
            setRightImage(1);
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
}

export default ImageSlider