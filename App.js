import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
//import HomeScreen from './screen/HomeScreen';
import { BasketContext } from './Context';
import StackNavigator from './StackNavigator';
export default function App() {
  return (
    <BasketContext>
    <SafeAreaView style={styles.container}>
      <StackNavigator/>
      <StatusBar style="auto" />
    </SafeAreaView>
    </BasketContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
