/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function QuestionBoxLine(props) {
  return (
    <div css={divCss}>
      <ul css={AbsolUlCss}></ul>
      <ul css={ulCss}>{props.children}</ul>
    </div>
  );
}

const divCss = css`
  position: relative;
  display: inline-block;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-basis: calc(33.3333% - 20px);
`;

const AbsolUlCss = css`
  position: absolute;
  top: 20px;
  right: 20px;
  left: 20px;
  padding: 0px;
  margin: 0px;
`;

const ulCss = css`
  padding: 20px;
  margin: 0px;
  list-style: none;
`;

export default QuestionBoxLine;
