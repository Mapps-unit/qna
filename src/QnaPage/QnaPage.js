/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import QuestionBox from './QuestionBox'

function QnaPage() {
  return (
    <div css={backgroundBlack}>
      <h2 css={[header2Css, colorWhite]}>디자인이 궁금한 순간</h2>
      <p css={[header3Css, colorWhite]}>
        기다리고 기다리던 Q&A 영상이 올라왔어요.
        <br />
        지금 바로 아래 버튼을 눌러 확인해보세요.
      </p>
      <QuestionBox></QuestionBox>
    </div>
  );
}

const backgroundBlack = css`
  background-color: black;
  height: 2000px;
`;

const colorWhite = css`
  color: #ffffff;
`;

const header2Css = css`
  font-size: 50px;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
`;

const header3Css = css`
  margin-top: 20px;
  font-size: 22px;
  font-weight: 400;
  line-hiehgt: 1.5;
  text-align: center;
`;

export default QnaPage;
