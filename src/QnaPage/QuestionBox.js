/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import QuestionBoxLine from "./QuestionBoxLine";

function QuestionBox() {
  return (
    <div css={ContentBoxcss}>
      <QuestionBoxLine>
        <li css={liCss}>
          <div css={[QuestionBoxCss, blueColor]}>
            <div css={Question21th}>
              <p css={Question21thp}>211번째 궁금함</p>
            </div>
            <p css={Question21thc}>디자이너 조직 몇명인지~ 궁금해요~</p>
          </div>
        </li>
        <li css={liCss}>
          <div css={[QuestionBoxCss, yellowColor]}>
            <div css={Question21th}>
              <p css={Question21thp}>138번째 궁금함</p>
            </div>
            <p css={Question21thc}>미니멀하기위한 원칙</p>
          </div>
        </li>
      </QuestionBoxLine>
      <QuestionBoxLine>
        <li css={liCss}>
          <div css={[QuestionBoxCss, yellowColor]}>
            <div css={Question21th}>
              <p css={Question21thp}>211번째 궁금함</p>
            </div>
            <p css={Question21thc}>디자이너 조직 몇명인지~ 궁금해요~</p>
          </div>
        </li>
        <li css={liCss}>
          <div css={[QuestionBoxCss, pinkColor]}>
            <div css={Question21th}>
              <p css={Question21thp}>138번째 궁금함</p>
            </div>
            <p css={Question21thc}>미니멀하기위한 원칙</p>
          </div>
        </li>
      </QuestionBoxLine>
      <QuestionBoxLine>
        <li css={liCss}>
          <div css={[QuestionBoxCss, orangeColor]}>
            <div css={Question21th}>
              <p css={Question21thp}>211번째 궁금함</p>
            </div>
            <p css={Question21thc}>디자이너 조직 몇명인지~ 궁금해요~</p>
          </div>
        </li>
        <li css={liCss}>
          <div css={[QuestionBoxCss, greenColor]}>
            <div css={Question21th}>
              <p css={Question21thp}>138번째 궁금함</p>
            </div>
            <p css={Question21thc}>미니멀하기위한 원칙</p>
          </div>
        </li>
      </QuestionBoxLine>
    </div>
  );
}

const ContentBoxcss = css`
  width: 100%;
  margin: 0 0 -20px;
  display: flex;
  flex-wrap: wrap;
`;

const liCss = css`
  opacity: 1;
  transform: translate3d(0px, 0px, 0px);
  padding-bottom: 20px;
`;

const QuestionBoxCss = css`
  padding: 17px 20px;
  word-break: break-all;
  border-radius: 10px;
`;

const Question21th = css`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 20px;
  margin-bottom: 10px;
`;

const Question21thp = css`
  display: inline-block;
  padding: 0px;
  margin: 0px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.5);
`;

const Question21thc = css`
  display: block;
  margin: 11px 0px 0px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  color: rgb(0, 0, 0);
`;

const blueColor = css`
  background-color: rgb(0, 132, 255);
`;

const yellowColor = css`
  background-color: rgb(255, 199, 43);
`;

const pinkColor = css`
  background-color: rgb(255, 158, 148);
`;

const orangeColor = css`
    background-color: rgb(254, 131, 58);
`;

const greenColor = css`
    background-color: rgb(0, 160, 78);
`;

export default QuestionBox;
