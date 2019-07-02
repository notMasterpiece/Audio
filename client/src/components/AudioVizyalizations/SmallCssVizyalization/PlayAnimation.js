import React from 'react';
import styled from 'styled-components';


const PlayAnimation = () => {
    return (
        <PlayWrap>
            <PlayBars className="ms_bars">
                <PlayBar className="bar" />
                <PlayBar className="bar" />
                <PlayBar className="bar" />
                <PlayBar className="bar" />
                <PlayBar className="bar" />
                <PlayBar className="bar" />
            </PlayBars>
        </PlayWrap>
    );
};


const PlayWrap = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const PlayBars = styled.div`
  height: 20px;
  left: 50%;
  position: absolute;
  top: 50%;
  width: 24px;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;

const PlayBar = styled.div`
  background: #fff;
  bottom: 1px;
  height: 3px;
  position: absolute;
  width: 2px;
  animation: sound 0ms -800ms linear infinite alternate;
  &:nth-child(1) {
      left: 1px;
      animation-duration: 474ms;
  }
    &:nth-child(2) {
      left: 5px;
      animation-duration: 433ms;
    }
    &:nth-child(3) {
      left: 9px;
      animation-duration: 407ms;
    }
    &:nth-child(4) {
      left: 13px;
      animation-duration: 458ms;
    }
    &:nth-child(5) {
      left: 17px;
      animation-duration: 400ms;
    }
    &:nth-child(6) {
      left: 21px;
      animation-duration: 427ms;
    }
    &:nth-child(7) {
      left: 25px;
      animation-duration: 441ms;
    }
    &:nth-child(8) {
      left: 29px;
      animation-duration: 419ms;
    }
    &:nth-child(9) {
      left: 33px;
      animation-duration: 487ms;
    }
    &:nth-child(10) {
      left: 37px;
      animation-duration: 442ms;
    }
`;

export default PlayAnimation;