
import React from "react"
import {Text , View, SafeAreaView, StyleSheet} from "react-native";
import Board from "../../components/Board";

const HomeScreen = ()=>{
  
    return(
      <SafeAreaView>
         <Text style={styles.paragraph}>Tic Tac Toe</Text>
         <Board/>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  paragraph: {
    marginTop:50,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
   
  },
});

export default HomeScreen;
