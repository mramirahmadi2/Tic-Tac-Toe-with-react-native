import { Text, SafeAreaView, StyleSheet, View, Button } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
// You can import supported modules from npm


// or any files within the Snack


export default function App() {
  const onPressLearnMore = () => {
    alert('oha ha');
  };
  return (
    <SafeAreaView style={styles.container}>
          <HomeScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

    // justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },

});
