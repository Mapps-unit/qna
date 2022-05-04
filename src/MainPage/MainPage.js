/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

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
        <p css={[fontSetting, floatLeft, colorMain, moveLeft]}>O</p>
        <p css={[fontSetting, floatLeft, disapppear]}>W</p>
        <p css={[fontSetting, floatLeft, colorMain, moveLeft]}>N&nbsp;</p>
        <p css={[fontSetting, floatLeft, disapppear]}>WEBS</p>
        <p css={[fontSetting, floatLeft, colorMain, moveLeft]}>IT</p>
        <p css={[fontSetting, floatLeft, disapppear]}>E</p>
      </div>
    </div>
  );
}

const fontSetting = css`
  font-size: 2rem;
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
    opacity: 1;   
  }
  100% {
    opacity: 0;
  }
`;

const disapppear = css`
animation: ${disapppearAnimation} 1s ease-in-out;
animation-fill-mode: both;
animation-iteration-count: 1;
`;

const moveAnimation = keyframes`
  0% {
    top: 0;
    left: 0;
  }

  100% {
    left: 1rem;
  }
`;

const moveLeft = css`
  position: relative;
  animation: ${moveAnimation} 1s ease;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  animation-delay: 0.5s;
`;

export default MainPage;