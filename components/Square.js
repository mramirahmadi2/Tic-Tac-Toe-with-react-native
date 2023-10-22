import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Square({ squareNumber ,onPress ,value}) {
  const handlePress = ()=>{
    onPress(squareNumber)
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.squareStle}>
        <Text style={styles.textStyle}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  squareStle: {
    height: 100,
    width: 100,
    backgroundColor: 'orange',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 50,
  },
});
