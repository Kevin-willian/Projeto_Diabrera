import { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import gsap from 'gsap'

import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import img5 from '../../assets/5.png'
import img6 from '../../assets/6.png'

const imageArray: string[] = [img1, img2, img3, img4, img5, img6]

function ImageSlider() {
  const [midImage, setMidImage] = useState<number>(0)
  const [rightImage, setRightImage] = useState<number>(1)
  const [leftImage, setLeftImage] = useState<number>(imageArray.length - 1)

  useEffect(() => {
    if (midImage === 0) {
      setLeftImage(imageArray.length - 1)
      setRightImage(1)
    } else if (midImage === imageArray.length - 1) {
      setRightImage(0)
      setLeftImage(midImage - 1)
    } else {
      setRightImage(midImage + 1)
      setLeftImage(midImage - 1)
    }
  }, [midImage])

  const Increment = (): void => {
    setMidImage(prev => (prev === imageArray.length - 1 ? 0 : prev + 1))
    gsap.fromTo('.middleImage', { x: -200, opacity: 0, scale: 0.6 }, { x: 0, opacity: 1, scale: 1, duration: 0.5 })
    gsap.fromTo('.rightImage', { x: 600, opacity: 0, scale: 0.6 }, { x: 0, opacity: 1, scale: 1, duration: 0.5 })
    gsap.fromTo('.leftImage', { x: -500, opacity: 0, scale: 0.6 }, { x: 0, opacity: 1, scale: 1, duration: 0.5 })
  }

  const Decrement = (): void => {
    setMidImage(prev => (prev === 0 ? imageArray.length - 1 : prev - 1))
    gsap.fromTo('.middleImage', { x: 200, opacity: 0, scale: 0.6 }, { x: 0, opacity: 1, scale: 1, duration: 0.5 })
    gsap.fromTo('.rightImage', { x: 600, opacity: 0, scale: 0.6 }, { x: 0, opacity: 1, scale: 1, duration: 0.5 })
    gsap.fromTo('.leftImage', { x: -500, opacity: 0, scale: 0.6 }, { x: 0, opacity: 1, scale: 1, duration: 0.5 })
  }

  return (
    <div className="ImageSlider">
      <div className="Images">
        <img src={imageArray[rightImage]} className="rightImage" alt="slide" />
        <img src={imageArray[midImage]} className="middleImage" alt="slide" />
        <img src={imageArray[leftImage]} className="leftImage" alt="slide" />
      </div>
      <div className="buttons">
        <button className="leftButton" onClick={Decrement}><IoIosArrowBack /></button>
        <button className="rightButton" onClick={Increment}><IoIosArrowBack /></button>
      </div>
      <div className="dotsPlace">
        {imageArray.map((_, index) => (
          <div key={index} className={`dots ${index === midImage ? 'active' : 'passive'}`} />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
