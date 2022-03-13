/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import React from "react";

function MainPage(props) {
  return (
    <div>
      <div>
        <p css={[fontSetting,]}>BUILD</p>
      </div>
      <div>
        <p css={[fontSetting]}>YOUR</p>
      </div>
      <div>
        <p css={[fontSetting, floatLeft, colorMain]}>O</p>
        <p css={[fontSetting, floatLeft, disapppear]}>W</p>
        <p css={[fontSetting, floatLeft, colorMain]}>N&nbsp;</p>
        <p css={[fontSetting, floatLeft]}>WEBS</p>
        <p css={[fontSetting, floatLeft]}>IT</p>
        <p css={[fontSetting, floatLeft]}>E</p>
      </div>
    </div>
  );
}

const fontSetting = css`
  font-size: 2em;
  font-weight:500;
`;

const colorMain = css`
  color: #FF3D00;
`;

const floatLeft = css`
  float: left;
`;

const disapppearAnimation = keyframes`
  0 {
    transform: translateY(0);    
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`;

const disapppear = css`
  animation: ${disapppearAnimation} 2s ease infinite;
`;


export default MainPage;