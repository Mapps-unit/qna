/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import QuestionListCol from "./QuestionListCol";

// 1. 랜덤 컬러 css를 리턴하는 함수를 만들어서, 랜덤하게 컬러 적용
// 2. 처음에 6개 데이터 왔다고 가정 예: [{order: 1, contents: "123"}, {order: 2, contents: "456"}, ...]
// 3. 그 6개를 랜덤 셔플
// 4. 배열 3개를 만들어서 차례대로 집어넣고 보여주기 

function createListItem(order, color, contents) {
  return (
    <li css={listItem}>
      <div css={[QuestionBoxCss, color]}>
        <div css={orderWrapper}>
          <p css={orderFont}>{order}번째 궁금함</p>
        </div>
        <p css={contentsWrapper}>{contents}</p>
      </div>
    </li>
  );
}

function QuestionList() {
  return (
    <div css={ContentBox}>
      <QuestionListCol>
        {createListItem(211, blueColor, "디자이너 조직 몇명인지~ 궁금해요~")}
        {createListItem(138, yellowColor, "미니멀하기위한 원칙")}
      </QuestionListCol>
      <QuestionListCol>
        {createListItem(123, yellowColor, "heom님 너무 멋있어요")}
        {createListItem(388, pinkColor, "maaps팀 짱짱맨 최고")}
      </QuestionListCol>
      <QuestionListCol>
        {createListItem(
          51,
          orangeColor,
          "51은 구디에서 저희 집까지 가는 버스 번호입니다."
        )}
        {createListItem(
          522,
          greenColor,
          "이것은 샘플 코드입니다. 태호킴이 손 봐줄겁니다."
        )}
      </QuestionListCol>
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

const listItem = css`
  opacity: 1;
  transform: translate3d(0px, 0px, 0px);
  padding-bottom: 20px;
`;

const QuestionBoxCss = css`
  padding: 17px 20px;
  word-break: break-all;
  border-radius: 10px;
`;

const orderWrapper = css`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 20px;
  margin-bottom: 10px;
`;

const orderFont = css`
  display: inline-block;
  padding: 0px;
  margin: 0px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.5);
`;

const contentsWrapper = css`
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

export default QuestionList;