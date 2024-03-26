import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Maria from './SRC/componets/Maria';
import Nicole from './SRC/componets/Nicole/main';



export default function App() {
  return (
    <View style={styles.container}>
      

<Maria/>
<Nicole/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

