import React, { Fragment, MouseEvent, useEffect, useState } from "react";
import Head from "next/head";

import Theme from "../../utils/Theme";
import BackTo from "../../components/buttons/BackTo";

interface Props {
  gameFun: (e: MouseEvent<HTMLDivElement>) => void;
}

const TicTacToe: React.FC = () => {
  const [game, setGame] = useState<string | number>(0);
  const [over, setOver] = useState<boolean>(false);
  const [winer, setWiner] = useState<string | undefined>();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const ones = document.getElementsByClassName("one");
    const twos = document.getElementsByClassName("two");
    const threes = document.getElementsByClassName("three");
    const fours = document.getElementsByClassName("four");
    const fives = document.getElementsByClassName("five");
    const sixs = document.getElementsByClassName("six");
    const sevens = document.getElementsByClassName("seven");
    const eights = document.getElementsByClassName("eight");

    if (
      (ones[0].textContent === "0" &&
        ones[1].textContent === "0" &&
        ones[2].textContent === "0") ||
      (ones[0].textContent === "❌" &&
        ones[1].textContent === "❌" &&
        ones[2].textContent === "❌")
    ) {
      setOver(true);
      setWiner(ones[0].textContent);
    } else if (
      (twos[0].textContent === "0" &&
        twos[1].textContent === "0" &&
        twos[2].textContent === "0") ||
      (twos[0].textContent === "❌" &&
        twos[1].textContent === "❌" &&
        twos[2].textContent === "❌")
    ) {
      setOver(true);
      setWiner(twos[0].textContent);
    } else if (
      (threes[0].textContent === "0" &&
        threes[1].textContent === "0" &&
        threes[2].textContent === "0") ||
      (threes[0].textContent === "❌" &&
        threes[1].textContent === "❌" &&
        threes[2].textContent === "❌")
    ) {
      setOver(true);
      setWiner(threes[0].textContent);
    } else if (
      (fours[0].textContent === "0" &&
        fours[1].textContent === "0" &&
        fours[2].textContent === "0") ||
      (fours[0].textContent === "❌" &&
        fours[1].textContent === "❌" &&
        fours[2].textContent === "❌")
    ) {
      setOver(true);
      setWiner(fours[0].textContent);
    } else if (
      (fives[0].textContent === "0" &&
        fives[1].textContent === "0" &&
        fives[2].textContent === "0") ||
      (fives[0].textContent === "❌" &&
        fives[1].textContent === "❌" &&
        fives[2].textContent === "❌")
    ) {
      setOver(true);
      setWiner(fives[0].textContent);
    } else if (
      (sixs[0].textContent === "0" &&
        sixs[1].textContent === "0" &&
        sixs[2].textContent === "0") ||
      (sixs[0].textContent === "❌" &&
        sixs[1].textContent === "❌" &&
        sixs[2].textContent === "❌")
    ) {
      setOver(true);
      setWiner(sixs[0].textContent);
    } else if (
      (sevens[0].textContent === "0" &&
        sevens[1].textContent === "0" &&
        sevens[2].textContent === "0") ||
      (sevens[0].textContent === "❌" &&
        sevens[1].textContent === "❌" &&
        sevens[2].textContent === "❌")
    ) {
      setOver(true);
      setWiner(sevens[0].textContent);
    } else if (
      (eights[0].textContent === "0" &&
        eights[1].textContent === "0" &&
        eights[2].textContent === "0") ||
      (eights[0].textContent === "❌" &&
        eights[1].textContent === "❌" &&
        eights[2].textContent === "❌")
    ) {
      setOver(true);
      setWiner(eights[0].textContent);
    }
  }, [game]);

  const gameFun = (e: MouseEvent<HTMLDivElement>): void => {
    if (!e.currentTarget.textContent && !over) {
      e.currentTarget.textContent = game.toString();
      setGame(game ? 0 : "❌");
      setCount(count + 1);
    }
  };

  const resetGame = (): void => {
    const allSquares = document.getElementsByClassName("square");
    for (let i = 0; i < 9; i++) {
      (allSquares[i] as HTMLDivElement).textContent = null;
    }

    setOver(false);
    setWiner(undefined);
    setCount(0);
  };

  return (
    <Fragment>
      <Head>
        <title>Tic-Tac-Toe</title>
      </Head>

      <Theme>
        <BackTo backTo={""} />

        <div className="dark:bg-gray-900 h-[92vh]">
          <h1 className="text-3xl font-bold text-center pt-5">Tic-Tac-Toe</h1>

          <div className="ttt w-fit m-auto h-auto pt-10 flex">
            <FirstRow gameFun={gameFun} />
            <SecondRow gameFun={gameFun} />
            <ThirdRow gameFun={gameFun} />
          </div>
          {(over || (count === 9 && !winer)) && (
            <div className="flex items-center justify-center flex-col my-5">
              {count === 9 && !winer ? (
                <div className="text-2xl">Game draw</div>
              ) : (
                <div className="text-2xl">
                  <span className="text-3xl font-bold">{winer}</span> is won the
                  game
                </div>
              )}
              <button
                className="rounded bg-red-500 text-xl py-1 px-4 my-2 text-white"
                onClick={resetGame}
              >
                Restart
              </button>
            </div>
          )}
        </div>
      </Theme>
    </Fragment>
  );
};

export default TicTacToe;

const FirstRow: React.FC<Props> = ({ gameFun }) => {
  return (
    <>
      <div>
        <div className="square one four seven" onClick={gameFun} />
        <div className="square one five" onClick={gameFun} />
        <div className="square one six eight" onClick={gameFun} />
      </div>
    </>
  );
};

const SecondRow: React.FC<Props> = ({ gameFun }) => {
  return (
    <>
      <div>
        <div className="square two four" onClick={gameFun} />
        <div className="square two five eight seven" onClick={gameFun} />
        <div className="square two six" onClick={gameFun} />
      </div>
    </>
  );
};

const ThirdRow: React.FC<Props> = ({ gameFun }) => {
  return (
    <>
      <div>
        <div className="square three four eight" onClick={gameFun} />
        <div className="square three five" onClick={gameFun} />
        <div className="square three six seven" onClick={gameFun} />
      </div>
    </>
  );
};
