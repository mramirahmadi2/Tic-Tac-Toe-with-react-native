import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Square from './Square';
export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [playerNumber, setPlayerNumber] = useState(1);
  const [winner, setWinner] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const validateWinner = () => {
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
    lines.forEach((line) => {
      if (
        square[line[0]] !== null &&
        square[line[0]] === square[line[1]] &&
        square[line[0]] === square[line[2]]
      ) {
        setWinner(square[line[0]]);
        setIsGameOver(true);
      }
    });
  };
  const handlePress = (squareNumber) => {
    if (!isGameOver && square[squareNumber - 1] === null) {
      const newSquares = [...square];
      newSquares[squareNumber - 1] = playerNumber === 1 ? 'x' : 'o';
      setSquare(newSquares);
      setPlayerNumber(playerNumber === 1 ? 2 : 1);
    }
  };
  const handleRest = () => {
    setSquare(Array(9).fill(null))
    setIsGameOver(false);
    setWinner(null)

  };
  useEffect(() => {
    validateWinner();
  }, [square]);
  return (
    <View style={styles.boardContainerStyle}>
      {winner && <Text>{winner} is the winner</Text>}
      <View style={styles.boardStyle}>
        {square.map((item, index) => {
          return (
            <Square
              squareNumber={index + 1}
              onPress={handlePress}
              value={item}
            />
          );
        })}
       
      </View>
       <View style={styles.restBtn}>
          <Button onPress={handleRest} title="reset" color="#841584" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boardStyle: {
    marginTop: 80,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boardContainerStyle: {
    marginTop: 80,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  restBtn:{

  }
});
