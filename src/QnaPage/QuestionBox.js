/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import QuestionBoxLine from "./QuestionBoxLine";

function LiBoxForm(order, color, contents) {
  return (
    <>
      <li css={liCss}>
        <div css={[QuestionBoxCss, color]}>
          <div css={Question21th}>
            <p css={Question21thp}>{order}번째 궁금함</p>
          </div>
          <p css={Question21thc}>{contents}</p>
        </div>
      </li>
    </>
  );
}

function QuestionBox() {
  return (
    <div css={ContentBox}>
      <QuestionBoxLine>
        {LiBoxForm(211, blueColor, '디자이너 조직 몇명인지~ 궁금해요~')}
        {LiBoxForm(138, yellowColor, '미니멀하기위한 원칙')}
      </QuestionBoxLine>
      <QuestionBoxLine>
        {LiBoxForm(123, yellowColor, 'heom님 너무 멋있어요')}
        {LiBoxForm(388, pinkColor, 'maaps팀 짱짱맨 최고')}
      </QuestionBoxLine>
      <QuestionBoxLine>
        {LiBoxForm(51, orangeColor, '51은 구디에서 저희 집까지 가는 버스 번호입니다.')}
        {LiBoxForm(522, greenColor, '이것은 샘플 코드입니다. 태호킴이 손 봐줄겁니다.')}
      </QuestionBoxLine>
    </div>
  );
}

const ContentBox = css`
  width: 100%;
  margin: 0 0 -20px;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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
