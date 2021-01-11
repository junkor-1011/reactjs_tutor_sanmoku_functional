import React,
  { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square = (props) => {
  // const [value, setValue] = useState(null);

  return (
    <button
      className="square"
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  )
}

const Board = (props) => {

  const renderSquare = (i) => {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    )
  }

  const winner = calculateWinner(props.squares);

  return (
    <div>
      {/* <div className="status">{status}</div> */}
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

const Game = () => {

  const [history, setHistory] = useState(
    [
      {
        squares: Array(9).fill(null),
      },
    ]
  );
  const current = history[history.length -1];
  const winner = calculateWinner(current.squares);
  const [xIsNext, setXIsNext] = useState(true);
  const status = winner ?
    `Winner: ${winner}` :
    `Next player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (i) => {
    const historyDummy = history;
    const current = history[history.length - 1];
    const squaresDummy = current.squares.slice();
    if (calculateWinner(squaresDummy) || squaresDummy[i]) {
      return
    }
    squaresDummy[i] = xIsNext ? 'X': 'O';
    setHistory(
      historyDummy.concat([{
        squares: squaresDummy,
      }]),
    );
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={handleClick}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}

const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i< lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
