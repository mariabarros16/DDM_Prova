import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nicole from './SRC/componets/Nicole/main';
import Maria from './SRC/componets/Maria';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" /> 
      <Nicole></Nicole>
      <Maria></Maria>
      
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

