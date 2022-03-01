/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import { useFloating, shift } from "@floating-ui/react-dom";

function App() {
  const { x, y, reference, floating, strategy } = useFloating({
    strategy: 'absolute',
    placement: 'bottom-end',
    x: '100px',
    middleware: [shift()],
  });

  return (
    <div className="App">
      <button css={buttonCss} ref={reference}>
        Button
      </button>
      <div
        ref={floating}
        style={{
          position: strategy,
          top: y ?? '',
          left: x ?? '30px',
        }}
      >
        Tooltip
      </div>
    </div>
  );
}



const buttonCss = css`
  position: absolute;
  top: 200px;
  left: 300px;
  background: #222;
  color: white;
  font-weight: bold;
  padding: 5px;
  border-radius: 4px;
  font-size: 90%;
  pointer-events: none;
`;

export default App;
