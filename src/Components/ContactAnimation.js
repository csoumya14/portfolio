import React from 'react'
import styled, { keyframes } from 'styled-components'

const ShowTopText = keyframes`
0% { 
  transform: translate3d(0, 100%, 0); 
}
  40%, 60% { 
    transform: translate3d(0, 50%, 0);
   }
  100% { 
    transform: translate3d(0, 0, 0);
   }
`
const ShowBottomText = keyframes`

  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
`
const AnimatedTitle = styled.div`
  color: #222;
  height: 150px;
  margin: 0 auto;
  position: relative;
  top: 50px;
  width: 260px;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 260px;
  }
  @media only screen and (max-width: 420px) {
    width: 260px;
  }
`
const TextTop = styled.div`
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
  border-bottom: 3px solid #e0474c;
  top: 0px;
`
const TextBottom = styled.div`
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;

  bottom: 0px;
`
const Info = styled.div`
  font-size: 25px;
  color: #3a4660;
  font-weight: 700;
  padding: 5px 0;
  position: absolute;
  animation: ${ShowTopText} 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  bottom: 0;
  transform: translate(0, 100%);
  .spanText:nth-child(1) {
    color: #845007;
  }
  .spanText {
    display: block;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 420px) {
    font-size: 20px;
  }
`
const InfoBottom = styled.div`
  font-size: 25px;
  color: #3a4660;
  font-weight: 700;
  padding: 2px 0;
  position: absolute;
  animation: ${ShowBottomText} 0.5s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 420px) {
    font-size: 20px;
  }
`

const ContactAnimation = () => {
  return (
    <AnimatedTitle>
      <TextTop>
        <Info>
          <span className="spanText">Like what you see?</span>
          <span className="spanText">Wants to know more?</span>
        </Info>
      </TextTop>
      <TextBottom>
        <InfoBottom>Getting in touch is easy!</InfoBottom>
      </TextBottom>
    </AnimatedTitle>
  )
}
export default ContactAnimation
