import React,
  { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square = (props) => {

  const [value, setValue] = useState(null);

  return (
    <button
      className="square"
      onClick={() => setValue('X')}
    >
      {/* {props.value} */}
      {value}
    </button>
  )
}

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square">
//         {this.props.value}
//       </button>
//     );
//   }
// }

const Board = (props) => {

  const [squares, setSquares] = useState(
    Array(9).fill(null)
  );

  const renderSquare = (i) => {
    return <Square value={squares[i]} />
  }
  const status = 'Next player: X';
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square />;
//   }
// 
//   render() {
//     const status = 'Next player: X';
// 
//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
