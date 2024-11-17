"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Player = "X" | "O" | null;

export default function TicTacToe() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<Player>(null);

  const checkWinner = (squares: Player[]): Player => {
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

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  const renderSquare = (index: number) => (
    <Button
      variant="outline"
      className="h-20 w-20 text-4xl text-red-400"
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </Button>
  );

  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col items-center gap-5 justify-center text-center ">
        <Card className="w-full max-w-md mx-auto bg-black/40">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Tic Tac Toe
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2">
              {Array(9)
                .fill(null)
                .map((_, index) => (
                  <div key={index}>{renderSquare(index)}</div>
                ))}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <p className="text-lg font-semibold mb-4">
              {winner
                ? `Winner: ${winner}`
                : board.every(Boolean)
                ? "It's a draw!"
                : `Next player: ${currentPlayer}`}
            </p>
            <Button onClick={resetGame}>Reset Game</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
